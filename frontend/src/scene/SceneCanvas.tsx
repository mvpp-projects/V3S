import React, { useEffect, useRef } from 'react'
import { useSceneStore } from '../state/sceneStore'
import { CursorOverlay } from '../components'
import { useTheme } from '../theme/ThemeProvider'
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
  const { getPresenceColor } = useTheme()

  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const orbitRef = useRef<OrbitControls | null>(null)
  const tControlsRef = useRef<TransformControls | null>(null)
  const meshByIdRef = useRef<Record<string, THREE.Object3D>>( {})
  const raycasterRef = useRef<THREE.Raycaster | null>(null)
  const resizeObserverRef = useRef<ResizeObserver | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.setClearColor(0xF3EEE6)
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

    // TransformControls
    const tControls = new TransformControls(camera, renderer.domElement)
    tControls.setSize(0.9)
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
    const amb = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(amb)
    const dir = new THREE.DirectionalLight(0xffffff, 0.6)
    dir.position.set(5, 10, 7)
    scene.add(dir)

    // Grid (shader material)
    const gridUniforms = {
      uColor: { value: new THREE.Color(0xE6E0D8) },
      uMajorColor: { value: new THREE.Color(0x7FAFB2) },
      uCamPos: { value: new THREE.Vector3() },
      uScale: { value: 1.0 },
      uThickness: { value: 0.005 },
      uMajorStep: { value: 10.0 },
      uMinorOpacity: { value: 0.38 },
      uMajorOpacity: { value: 0.78 }
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
      let mesh: THREE.Mesh
      if (o.type === 'cube') {
        mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial({ color: 0x8b9ca7 }))
      } else {
        mesh = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 16), new THREE.MeshStandardMaterial({ color: 0x9aa8a0 }))
      }
      mesh.position.set(o.transform.position[0], o.transform.position[1], o.transform.position[2])
      mesh.rotation.set(o.transform.rotation[0], o.transform.rotation[1], o.transform.rotation[2])
      mesh.scale.set(o.transform.scale[0], o.transform.scale[1], o.transform.scale[2])
      mesh.userData.id = o.id
      mesh.castShadow = false
      mesh.receiveShadow = true
      meshById[o.id] = mesh
      scene.add(mesh)
    }
    Object.values(useSceneStore.getState().objects).forEach(buildMesh)

    // Raycaster
    const raycaster = new THREE.Raycaster()
    raycasterRef.current = raycaster

    // Pointer down -> pick
    const handlePointerDown = (ev: MouseEvent) => {
      if (!rendererRef.current || !cameraRef.current) return
      const rect = rendererRef.current.domElement.getBoundingClientRect()
      const x = ((ev.clientX - rect.left) / rect.width) * 2 - 1
      const y = -(((ev.clientY - rect.top) / rect.height) * 2 - 1)
      raycaster.setFromCamera(new THREE.Vector2(x, y), cameraRef.current)
      const meshes = Object.values(meshByIdRef.current)
      const intersects = raycaster.intersectObjects(meshes, true)
      if (intersects.length > 0) {
        const target = intersects[0].object
        const id = (target as any).userData?.id
        selectObject(id ?? null)
      } else {
        selectObject(null)
      }
    }
    renderer.domElement.addEventListener('pointerdown', handlePointerDown)

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
      ro.disconnect()
      resizeObserverRef.current = null
      try { controls.dispose() } catch {}
      try { tControls.dispose() } catch {}
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
    }
  }, []) // mount only

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
      let mesh = meshes[o.id] as THREE.Mesh | undefined
      if (!mesh) {
        if (o.type === 'cube') mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial({ color: 0x8b9ca7 }))
        else mesh = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 16), new THREE.MeshStandardMaterial({ color: 0x9aa8a0 }))
        mesh.userData.id = o.id
        mesh.receiveShadow = true
        meshes[o.id] = mesh
        scene.add(mesh)
      }
      mesh.position.set(o.transform.position[0], o.transform.position[1], o.transform.position[2])
      mesh.rotation.set(o.transform.rotation[0], o.transform.rotation[1], o.transform.rotation[2])
      mesh.scale.set(o.transform.scale[0], o.transform.scale[1], o.transform.scale[2])
    })
  }, [objects])

  // Attach/detach selection without reinit
  useEffect(() => {
    const tControls = tControlsRef.current
    if (!tControls) return
    const id = selectedId
    if (id) {
      const target = meshByIdRef.current[id]
      if (target) tControls.attach(target)
    } else {
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
    <div ref={containerRef} style={{ position: 'relative', height: '100%', width: '100%' }}>
      <CursorOverlay presences={pres as any} />
    </div>
  )
}
