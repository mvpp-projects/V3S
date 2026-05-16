import * as THREE from 'three'
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js'
import { useSceneStore } from '../state/sceneStore'

function buildMeshFromObj(o: any) {
  if (o.type === 'cube') {
    const segments = typeof o.props?.segments === 'number' ? Math.max(1, Math.floor(o.props.segments)) : 1
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1, segments, segments, segments), new THREE.MeshStandardMaterial({ color: new THREE.Color((o.props?.color) ?? '#8b9ca7') }))
    mesh.position.set(o.transform.position[0], o.transform.position[1], o.transform.position[2])
    mesh.rotation.set(o.transform.rotation[0], o.transform.rotation[1], o.transform.rotation[2])
    mesh.scale.set(o.transform.scale[0], o.transform.scale[1], o.transform.scale[2])
    mesh.name = o.id
    return mesh
  } else if (o.type === 'sphere') {
    const segments = typeof o.props?.segments === 'number' ? Math.max(4, Math.floor(o.props.segments)) : 16
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.5, segments, Math.max(4, Math.floor(segments * 0.75))), new THREE.MeshStandardMaterial({ color: new THREE.Color((o.props?.color) ?? '#9aa8a0') }))
    mesh.position.set(o.transform.position[0], o.transform.position[1], o.transform.position[2])
    mesh.rotation.set(o.transform.rotation[0], o.transform.rotation[1], o.transform.rotation[2])
    mesh.scale.set(o.transform.scale[0], o.transform.scale[1], o.transform.scale[2])
    mesh.name = o.id
    return mesh
  } else if (o.type === 'pointLight') {
    const light = new THREE.PointLight((o.props?.color) ?? 0xffffff, o.props?.intensity ?? 1.5, o.props?.distance ?? 0, o.props?.decay ?? 2)
    light.position.set(o.transform.position[0], o.transform.position[1], o.transform.position[2])
    light.name = o.id
    return light
  }
  return null
}

export function exportSceneAsGLTF() {
  const objects = useSceneStore.getState().objects
  const scene = new THREE.Scene()
  Object.values(objects).forEach((o: any) => {
    const mesh = buildMeshFromObj(o)
    if (mesh) scene.add(mesh)
  })

  const exporter = new GLTFExporter()
  exporter.parse(scene, (gltf) => {
    const output = JSON.stringify(gltf)
    const blob = new Blob([output], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'scene.gltf'
    a.click()
    URL.revokeObjectURL(url)
  }, { binary: false })
}
