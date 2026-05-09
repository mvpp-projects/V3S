import React, { useEffect, useRef } from 'react'
import { useSceneStore } from '../state/sceneStore'
import { CursorOverlay } from '../components'
import { useTheme } from '../theme/ThemeProvider'
import { sendCursorPresence } from '../lib/sceneSync'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js'

export default function SceneCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const presence = useSceneStore((s) => s.presence)
  const objects = useSceneStore((s) => s.objects)
  const selectedId = useSceneStore((s) => s.selectedId)
  const gizmoMode = useSceneStore((s) => s.gizmoMode)
  const selectObject = useSceneStore((s) => s.selectObject)
  const updateTransform = useSceneStore((s) => s.updateTransform)
  const lighting = useSceneStore((s) => s.lighting)
  const { getPresenceColor } = useTheme()

  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const orbitRef = useRef<OrbitControls | null>(null)
  const tControlsRef = useRef<TransformControls | null>(null)
  const meshByIdRef = useRef<Record<string, THREE.Object3D>>( {})
  const selectionOutlineRef = useRef<THREE.LineSegments | null>(null)
  const raycasterRef = useRef<THREE.Raycaster | null>(null)
  const resizeObserverRef = useRef<ResizeObserver | null>(null)
  const ambientLightRef = useRef<THREE.AmbientLight | null>(null)
  const dirLightRef = useRef<THREE.DirectionalLight | null>(null)

  const createMaterialForObject = (o: any) => {
    const props = o.props ?? {}
    const fallbackColor = o.type === 'cube' ? '#8b9ca7' : '#9aa8a0'
    const colorHex = (props.baseColor as string) ?? (props.color as string) ?? fallbackColor
    const roughness = typeof props.roughness === 'number' ? props.roughness : 0.5
    const metalness = typeof props.metalness === 'number' ? props.metalness : 0.0
    return new THREE.MeshStandardMaterial({ color: new THREE.Color(colorHex), roughness, metalness })
  }

  const createPointLightMesh = (o: any) => {
    const props = o.props ?? {}
    const colorHex = (props.color as string) ?? '#ffffff'
    const intensity = typeof props.intensity === 'number' ? props.intensity : 1.5
    const distance = typeof props.distance === 'number' ? props.distance : 0
    const decay = typeof props.decay === 'number' ? props.decay : 2

    const lightColor = new THREE.Color(colorHex)
    const light = new THREE.PointLight(lightColor, intensity, distance, decay)
    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.15, 16, 16),
      new THREE.MeshBasicMaterial({ color: lightColor })
    )
    mesh.userData.light = light
    mesh.add(light)
    return mesh
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    // Light neutral background to match the minimal shell
    renderer.setClearColor(0xf1f5f9)
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Scene / Camera
    const scene = new THREE.Scene()
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000)
    camera.position.set(4, 3, 6)
    cameraRef.current = camera

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.target.set(0, 0, 0)
    orbitRef.current = controls

    // TransformControls (Blender-style gizmo)
    const tControls = new TransformControls(camera, renderer.domElement)
    // Add the visual helper (an Object3D) to the scene so the gizmo is rendered
    const tHelper = (tControls as any).getHelper ? (tControls as any).getHelper() : null
    if (tHelper) {
      scene.add(tHelper)
    }
    tControls.setSize(1.0) // slightly smaller gizmo size
    tControls.showX = true
    tControls.showY = true
    tControls.showZ = true
    ;(window as any).v3sTControls = tControls // debug handle if needed
    tControls.addEventListener('dragging-changed', (e: any) => {
      controls.enabled = !e.value
    })
    tControls.addEventListener('objectChange', () => {
      const obj = tControls.object as THREE.Object3D | null
      if (!obj) return
      const id = (obj as any).userData?.id
      if (!id) return
      updateTransform(id, {
        position: [obj.position.x, obj.position.y, obj.position.z],
        rotation: [obj.rotation.x, obj.rotation.y, obj.rotation.z],
        scale: [obj.scale.x, obj.scale.y, obj.scale.z]
      })
    })
    tControlsRef.current = tControls

    // Lights
    const amb = new THREE.AmbientLight(0xffffff, lighting.ambientIntensity)
    scene.add(amb)
    ambientLightRef.current = amb
    const dir = new THREE.DirectionalLight(0xffffff, lighting.directionalIntensity)
    dir.position.set(5, 10, 7)
    scene.add(dir)
    dirLightRef.current = dir

    // Grid (shader material)
    const gridUniforms = {
      // Soft grid on a light background
      uColor: { value: new THREE.Color(0xd7dee7) },
      uMajorColor: { value: new THREE.Color(0x93c5fd) },
      uCamPos: { value: new THREE.Vector3() },
      uScale: { value: 1.0 },
      uThickness: { value: 0.004 },
      uMajorStep: { value: 10.0 },
      uMinorOpacity: { value: 0.26 },
      uMajorOpacity: { value: 0.55 }
    }
    const gridMaterial = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      uniforms: gridUniforms,
      vertexShader: `
        varying vec3 vWorldPos;
        void main(){
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,
      fragmentShader: `
        varying vec3 vWorldPos;
        uniform vec3 uCamPos;
        uniform vec3 uColor;
        uniform vec3 uMajorColor;
        uniform float uScale;
        uniform float uThickness;
        uniform float uMajorStep;
        uniform float uMinorOpacity;
        uniform float uMajorOpacity;
        float grid(vec2 p, float step, float thickness){
          float remx = abs(p.x - round(p.x / step) * step);
          float remy = abs(p.y - round(p.y / step) * step);
          float lx = remx < thickness ? 1.0 : 0.0;
          float ly = remy < thickness ? 1.0 : 0.0;
          return max(lx, ly);
        }
        void main(){
          vec2 p = vWorldPos.xz * uScale;
          float minor = grid(p, 1.0, uThickness);
          float major = grid(p, uMajorStep, uThickness * 1.5);
          vec3 col = (major > 0.5) ? uMajorColor : uColor;
          float alpha = (major > 0.5) ? uMajorOpacity : (minor > 0.5 ? uMinorOpacity : 0.0);
          float dist = distance(vWorldPos, uCamPos);
          alpha *= clamp(1.0 - dist/200.0, 0.15, 1.0);
          if(alpha < 0.01) discard;
          gl_FragColor = vec4(col, alpha);
        }
      `
    })
    const gridPlane = new THREE.Mesh(new THREE.PlaneGeometry(10000, 10000), gridMaterial)
    gridPlane.rotation.x = -Math.PI / 2
    gridPlane.position.set(0, 0, 0)
    gridPlane.renderOrder = -1
    scene.add(gridPlane)

    // Helper: build initial meshes from store snapshot
    const meshById = meshByIdRef.current
    const buildMesh = (o: any) => {
      let mesh: THREE.Object3D
      if (o.type === 'cube') {
        mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), createMaterialForObject(o))
      } else if (o.type === 'sphere') {
        mesh = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 16), createMaterialForObject(o))
      } else if (o.type === 'pointLight') {
        mesh = createPointLightMesh(o)
      } else {
        return
      }
      mesh.position.set(o.transform.position[0], o.transform.position[1], o.transform.position[2])
      mesh.rotation.set(o.transform.rotation[0], o.transform.rotation[1], o.transform.rotation[2])
      mesh.scale.set(o.transform.scale[0], o.transform.scale[1], o.transform.scale[2])
      mesh.userData.id = o.id
      if (mesh instanceof THREE.Mesh) {
        mesh.castShadow = false
        mesh.receiveShadow = true
      }
      meshById[o.id] = mesh
      scene.add(mesh)
    }
    Object.values(useSceneStore.getState().objects).forEach(buildMesh)

    // Raycaster
    const raycaster = new THREE.Raycaster()
    raycasterRef.current = raycaster

    // Pointer down -> pick (but ignore when gizmo is being used)
    const handlePointerDown = (ev: MouseEvent) => {
      // If TransformControls has captured this interaction (hovering/dragging gizmo),
      // do not run our object picking logic, otherwise we break gizmo dragging.
      const tControls = tControlsRef.current as any
      if (tControls && (tControls.dragging || tControls.axis)) {
        return
      }

      if (!rendererRef.current || !cameraRef.current) return
      const rect = rendererRef.current.domElement.getBoundingClientRect()
      const x = ((ev.clientX - rect.left) / rect.width) * 2 - 1
      const y = -(((ev.clientY - rect.top) / rect.height) * 2 - 1)
      raycaster.setFromCamera(new THREE.Vector2(x, y), cameraRef.current)
      const meshes = Object.values(meshByIdRef.current)
      const intersects = raycaster.intersectObjects(meshes, true)
      if (intersects.length > 0) {
        let target: THREE.Object3D | null = intersects[0].object
        // Walk up to find the object that carries our id (handles child hits)
        while (target && !(target as any).userData?.id) {
          target = target.parent
        }
        const id = (target as any)?.userData?.id
        console.log('[v3s] click hit object, id =', id)
        selectObject(id ?? null)
      } else {
        console.log('[v3s] click hit nothing, clearing selection')
        selectObject(null)
      }
    }
    const handlePointerMove = (ev: MouseEvent) => {
      if (!rendererRef.current) return
      const rect = rendererRef.current.domElement.getBoundingClientRect()
      if (rect.width <= 0 || rect.height <= 0) return
      const x = ((ev.clientX - rect.left) / rect.width) * 100
      const y = ((ev.clientY - rect.top) / rect.height) * 100
      sendCursorPresence(Math.max(0, Math.min(100, x)), Math.max(0, Math.min(100, y)))
    }
    renderer.domElement.addEventListener('pointerdown', handlePointerDown)
    renderer.domElement.addEventListener('pointermove', handlePointerMove)

    // Resize handling: ResizeObserver ensures container-driven sizing
    const onResize = () => {
      const container = containerRef.current
      if (!container || !rendererRef.current || !cameraRef.current) return
      const w = container.clientWidth
      const h = container.clientHeight
      rendererRef.current.setSize(w, h, false)
      cameraRef.current.aspect = w / Math.max(h, 1)
      cameraRef.current.updateProjectionMatrix()
    }
    onResize()

    const ro = new ResizeObserver(onResize)
    ro.observe(container)
    resizeObserverRef.current = ro

    // Keyboard handlers use the store directly to avoid stale closures
    const onKey = (e: KeyboardEvent) => {
      if (e.repeat) return
      if (!tControlsRef.current) return
      if (e.key === 'g' || e.key === 'G') {
        useSceneStore.getState().setGizmoMode('translate')
      } else if (e.key === 'r' || e.key === 'R') {
        useSceneStore.getState().setGizmoMode('rotate')
      } else if (e.key === 's' || e.key === 'S') {
        useSceneStore.getState().setGizmoMode('scale')
      } else if (e.key === 'x' || e.key === 'X') {
        tControlsRef.current.showX = true; tControlsRef.current.showY = false; tControlsRef.current.showZ = false
      } else if (e.key === 'y' || e.key === 'Y') {
        tControlsRef.current.showX = false; tControlsRef.current.showY = true; tControlsRef.current.showZ = false
      } else if (e.key === 'z' || e.key === 'Z') {
        tControlsRef.current.showX = false; tControlsRef.current.showY = false; tControlsRef.current.showZ = true
      } else if (e.key === 'Escape') {
        useSceneStore.getState().selectObject(null)
      }
    }
    window.addEventListener('keydown', onKey)

    const onKeyDown = (e: KeyboardEvent) => {
      if (!tControlsRef.current) return
      if (e.key === 'Shift') {
        tControlsRef.current.setTranslationSnap(0.1)
        tControlsRef.current.setRotationSnap(THREE.MathUtils.degToRad(5))
        tControlsRef.current.setScaleSnap(0.1)
      } else if ((e.key === 'D' || e.key === 'd') && e.shiftKey) {
        const sel = useSceneStore.getState().selectedId
        if (!sel) return
        const src = useSceneStore.getState().objects[sel]
        if (!src) return
        const id = `obj_${Math.random().toString(36).slice(2, 8)}`
        useSceneStore.getState().upsertObject({
          id,
          type: src.type,
          transform: {
            position: [src.transform.position[0] + 0.5, src.transform.position[1], src.transform.position[2] + 0.5],
            rotation: [...src.transform.rotation],
            scale: [...src.transform.scale]
          },
          props: src.props
        })
        useSceneStore.getState().selectObject(id)
      }
    }
    const onKeyUp = (e: KeyboardEvent) => {
      if (!tControlsRef.current) return
      if (e.key === 'Shift') {
        // Setting null/undefined disables snap; set via any to satisfy TS if needed
        ;(tControlsRef.current as any).setTranslationSnap(null)
        ;(tControlsRef.current as any).setRotationSnap(null)
        ;(tControlsRef.current as any).setScaleSnap(null)
      }
      // Ensure axes visible when no selection
      if (!useSceneStore.getState().selectedId) {
        tControlsRef.current.showX = true; tControlsRef.current.showY = true; tControlsRef.current.showZ = true
      }
      if (e.key === 'Delete') {
        const sel = useSceneStore.getState().selectedId
        if (!sel) return
        useSceneStore.getState().removeObject(sel)
        useSceneStore.getState().selectObject(null)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)

    // Animation
    let animId: number = 0
    const animate = () => {
      animId = requestAnimationFrame(animate)
      controls.update()
      ;(gridUniforms.uCamPos.value as THREE.Vector3).copy(camera.position)
      renderer.render(scene, camera)
    }
    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
      renderer.domElement.removeEventListener('pointerdown', handlePointerDown)
      renderer.domElement.removeEventListener('pointermove', handlePointerMove)
      ro.disconnect()
      resizeObserverRef.current = null
      try { controls.dispose() } catch {}
      try {
        // Remove gizmo helper from scene and dispose
        const helper = (tControls as any).getHelper ? (tControls as any).getHelper() : null
        if (helper) {
          scene.remove(helper)
        }
        tControls.detach()
        tControls.dispose()
      } catch {}
      // dispose meshes / geometries / materials we created
      Object.values(meshByIdRef.current).forEach((m) => {
        if (m instanceof THREE.Mesh) {
          const geo = (m.geometry as THREE.BufferGeometry | null)
          const mat = (m.material as THREE.Material | THREE.Material[] | null)
          if (geo) geo.dispose()
          if (Array.isArray(mat)) mat.forEach((mm) => mm.dispose())
          else if (mat) mat.dispose()
        }
        scene.remove(m)
      })
      meshByIdRef.current = {}
      // dispose grid resources
      gridPlane.geometry.dispose()
      gridMaterial.dispose()
      // renderer
      try { renderer.dispose() } catch {}
      if (renderer.domElement.parentNode === container) container.removeChild(renderer.domElement)
      rendererRef.current = null
      sceneRef.current = null
      cameraRef.current = null
      orbitRef.current = null
      tControlsRef.current = null
      raycasterRef.current = null
      if (selectionOutlineRef.current) {
        try {
          scene.remove(selectionOutlineRef.current)
        } catch {}
        const geo = selectionOutlineRef.current.geometry as THREE.BufferGeometry | null
        const mat = selectionOutlineRef.current.material as THREE.Material | null
        if (geo) geo.dispose()
        if (mat) mat.dispose()
        selectionOutlineRef.current = null
      }
    }
  }, []) // mount only

  // React to lighting changes
  useEffect(() => {
    if (ambientLightRef.current) {
      ambientLightRef.current.intensity = lighting.ambientIntensity
    }
    if (dirLightRef.current) {
      dirLightRef.current.intensity = lighting.directionalIntensity
    }
  }, [lighting])

  // Sync meshes when objects change (in-place updates)
  useEffect(() => {
    const scene = sceneRef.current
    if (!scene) return
    const meshes = meshByIdRef.current
    const storeObjs = objects

    // Remove deleted
    Object.keys(meshes).forEach((id) => {
      if (!storeObjs[id]) {
        const m = meshes[id]
        if (m) {
          if (m.parent) m.parent.remove(m)
          // dispose mesh resources if mesh
          if (m instanceof THREE.Mesh) {
            const geo = m.geometry as THREE.BufferGeometry | null
            const mat = m.material as THREE.Material | THREE.Material[] | null
            if (geo) geo.dispose()
            if (Array.isArray(mat)) mat.forEach((mm) => mm.dispose())
            else if (mat) mat.dispose()
          }
        }
        delete meshes[id]
      }
    })

    // Add or update
    Object.values(storeObjs).forEach((o) => {
      let mesh = meshes[o.id] as THREE.Object3D | undefined
      if (!mesh) {
        if (o.type === 'cube') {
          mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), createMaterialForObject(o))
        } else if (o.type === 'sphere') {
          mesh = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 16), createMaterialForObject(o))
        } else if (o.type === 'pointLight') {
          mesh = createPointLightMesh(o)
        } else {
          return
        }
        mesh.userData.id = o.id
        if (mesh instanceof THREE.Mesh) {
          mesh.receiveShadow = true
        }
        meshes[o.id] = mesh
        scene.add(mesh)
      }

      if (o.type === 'cube' || o.type === 'sphere') {
        if (mesh instanceof THREE.Mesh) {
          const props = o.props ?? {}
          const fallbackColor = o.type === 'cube' ? '#8b9ca7' : '#9aa8a0'
          const colorHex = (props.baseColor as string) ?? (props.color as string) ?? fallbackColor
          const roughness = typeof props.roughness === 'number' ? props.roughness : 0.5
          const metalness = typeof props.metalness === 'number' ? props.metalness : 0.0
          const mat = mesh.material
          if (!Array.isArray(mat) && mat instanceof THREE.MeshStandardMaterial) {
            mat.color.set(colorHex)
            mat.roughness = roughness
            mat.metalness = metalness
          }
        }
      } else if (o.type === 'pointLight') {
        const props = o.props ?? {}
        const colorHex = (props.color as string) ?? '#ffffff'
        const intensity = typeof props.intensity === 'number' ? props.intensity : 1.5
        const distance = typeof props.distance === 'number' ? props.distance : 0
        const decay = typeof props.decay === 'number' ? props.decay : 2
        const light = (mesh as any).userData?.light as THREE.PointLight | undefined
        if (light) {
          light.color.set(colorHex)
          light.intensity = intensity
          light.distance = distance
          light.decay = decay
        }
        if (mesh instanceof THREE.Mesh && mesh.material instanceof THREE.MeshBasicMaterial) {
          mesh.material.color.set(colorHex)
        }
      }

      mesh.position.set(o.transform.position[0], o.transform.position[1], o.transform.position[2])
      mesh.rotation.set(o.transform.rotation[0], o.transform.rotation[1], o.transform.rotation[2])
      mesh.scale.set(o.transform.scale[0], o.transform.scale[1], o.transform.scale[2])
    })
  }, [objects])

  // Attach/detach selection without reinit
  useEffect(() => {
    const tControls = tControlsRef.current
    const scene = sceneRef.current
    if (!tControls || !scene) return

    // Clear previous outline, if any
    if (selectionOutlineRef.current) {
      try {
        scene.remove(selectionOutlineRef.current)
      } catch {}
      const geo = selectionOutlineRef.current.geometry as THREE.BufferGeometry | null
      const mat = selectionOutlineRef.current.material as THREE.Material | null
      if (geo) geo.dispose()
      if (mat) mat.dispose()
      selectionOutlineRef.current = null
    }

    const id = selectedId
    if (id) {
      // Whenever a new object is selected, ensure all axes are visible
      // so any previous X/Y/Z axis lock is cleared.
      tControls.showX = true
      tControls.showY = true
      tControls.showZ = true
      const target = meshByIdRef.current[id]
      if (target) {
        console.log('[v3s] attaching gizmo to', id, target)
        tControls.attach(target)

        // Add edge highlight around selected mesh
        if (target instanceof THREE.Mesh) {
          const edgesGeo = new THREE.EdgesGeometry(target.geometry as THREE.BufferGeometry)
          const edgesMat = new THREE.LineBasicMaterial({ color: 0x00aaff })
          const outline = new THREE.LineSegments(edgesGeo, edgesMat)
          outline.position.copy(target.position)
          outline.rotation.copy(target.rotation)
          outline.scale.copy(target.scale)
          scene.add(outline)
          selectionOutlineRef.current = outline
        }
      }
    } else {
      console.log('[v3s] detaching gizmo (no selection)')
      // No selection -> reset axes so next selection starts unlocked
      tControls.showX = true
      tControls.showY = true
      tControls.showZ = true
      tControls.detach()
    }
  }, [selectedId])

  // Sync gizmo mode
  useEffect(() => {
    const tControls = tControlsRef.current
    if (tControls) {
      tControls.setMode(gizmoMode)
    }
  }, [gizmoMode])

  const pres = Object.values(presence).map((p, i) => ({
    userId: p.userId,
    x: p.cursor?.x ?? 50,
    y: p.cursor?.y ?? 50,
    color: p.color ?? getPresenceColor(i),
    initials: p.userId.slice(0, 2).toUpperCase()
  }))

  return (
    <div ref={containerRef} className="scene-canvas">
      <CursorOverlay presences={pres as any} />
    </div>
  )
}
