import React from 'react'
import './ToolShelf.css'
import { Button } from './ui'
import { useSceneStore } from '../state/sceneStore'

const Icon = {
  Select: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 5h14v14H5z" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <path d="M7 7l5 2 2 5-5-2-2-5z" fill="currentColor" />
    </svg>
  ),
  Move: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l3 3h-2v6h-2V5H9l3-3z" fill="currentColor" />
      <path d="M12 22l-3-3h2v-6h2v6h2l-3 3z" fill="currentColor" />
      <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.5" />
    </svg>
  ),
  Rotate: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4a8 8 0 018 8h-3l4 4 4-4h-3A10 10 0 1012 22" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  Scale: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="12" height="12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 12h12" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <path d="M12 6v12" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    </svg>
  )
}

export default function ToolShelf() {
  const executeCommand = useSceneStore(s => s.executeCommand)
  const selectObject = useSceneStore(s => s.selectObject)
  const gizmoMode = useSceneStore(s => s.gizmoMode)
  const setGizmoMode = useSceneStore(s => s.setGizmoMode)
  const tools: Array<{ key: keyof typeof Icon; label: string; onClick?: () => void }> = [
    { key: 'Select', label: 'Select', onClick: () => selectObject(null) },
    { key: 'Move', label: 'Move', onClick: () => setGizmoMode('translate') },
    { key: 'Rotate', label: 'Rotate', onClick: () => setGizmoMode('rotate') },
    { key: 'Scale', label: 'Scale', onClick: () => setGizmoMode('scale') }
  ]
  const addCube = () => {
    const id = `obj_${Math.random().toString(36).slice(2, 8)}`
    executeCommand({ type: 'AddObject', payload: {
      id,
      type: 'cube',
      transform: { position: [0, 0.5, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
      props: { color: '#8b9ca7' }
    } })
    selectObject(id)
  }
  const addSphere = () => {
    const id = `obj_${Math.random().toString(36).slice(2, 8)}`
    executeCommand({ type: 'AddObject', payload: {
      id,
      type: 'sphere',
      transform: { position: [0, 0.5, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
      props: { color: '#9aa8a0', segments: 16 }
    } })
    selectObject(id)
  }
  const addLight = () => {
    const id = `obj_${Math.random().toString(36).slice(2, 8)}`
    executeCommand({ type: 'AddObject', payload: {
      id,
      type: 'pointLight',
      transform: { position: [0, 2, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
      props: { color: '#ffffff', intensity: 1.5, distance: 0, decay: 2 }
    } })
    selectObject(id)
  }

  const extrudeSelected = () => {
    const face = useSceneStore.getState().selectedFace
    const sel = face?.objectId ?? useSceneStore.getState().selectedId
    if (!sel) return
    const src = useSceneStore.getState().objects[sel]
    if (!src || src.type === 'pointLight') return
    if (face) {
      const [nx, ny, nz] = face.normal
      const axis = Math.abs(nx) >= Math.abs(ny) && Math.abs(nx) >= Math.abs(nz) ? 'x' : Math.abs(ny) >= Math.abs(nz) ? 'y' : 'z'
      const sign = axis === 'x' ? Math.sign(nx || 1) : axis === 'y' ? Math.sign(ny || 1) : Math.sign(nz || 1)
      executeCommand({ type: 'ExtrudeObject', payload: { id: sel, axis, amount: 0.5 * (sign || 1) } })
      return
    }
    executeCommand({ type: 'ExtrudeObject', payload: { id: sel, axis: 'y', amount: 0.5 } })
  }

  const subdivideSelected = () => {
    const sel = useSceneStore.getState().selectedId
    if (!sel) return
    const src = useSceneStore.getState().objects[sel]
    if (!src || src.type === 'pointLight') return
    executeCommand({ type: 'SubdivideObject', payload: { id: sel, delta: 1 } })
  }
  return (
    <nav className="v3s-toolshelf">
      {/* Transform tools */}
      {tools.map((t) => {
        const active =
          (t.key === 'Move' && gizmoMode === 'translate') ||
          (t.key === 'Rotate' && gizmoMode === 'rotate') ||
          (t.key === 'Scale' && gizmoMode === 'scale')
        return (
          <button
            key={t.key}
            className={`v3s-toolbtn ${active ? 'v3s-toolbtn--active' : ''}`}
            title={t.label}
            aria-label={t.label}
            onClick={t.onClick}
          >
            <span className="v3s-toolbtn__icon" aria-hidden>
              {Icon[t.key]}
            </span>
          </button>
        )
      })}

      <div className="v3s-toolshelf__divider" />

      {/* Primitives */}
      <button className="v3s-toolbtn" title="Add Cube" aria-label="Add Cube" onClick={addCube}>
        <span className="v3s-toolbtn__icon" aria-hidden>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="6" width="12" height="12" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </span>
      </button>
      <button className="v3s-toolbtn" title="Add Sphere" aria-label="Add Sphere" onClick={addSphere}>
        <span className="v3s-toolbtn__icon" aria-hidden>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </span>
      </button>

      <button className="v3s-toolbtn" title="Add Light" aria-label="Add Light" onClick={addLight}>
        <span className="v3s-toolbtn__icon" aria-hidden>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" />
            <path d="M9 14h6" stroke="currentColor" strokeWidth="1.5" />
            <path d="M10 16h4v2a2 2 0 01-2 2 2 2 0 01-2-2v-2z" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </span>
      </button>

      <div className="v3s-toolshelf__divider" />

      <button className="v3s-toolbtn" title="Extrude Selected" aria-label="Extrude Selected" onClick={extrudeSelected}>
        <span className="v3s-toolbtn__icon" aria-hidden>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4v8" stroke="currentColor" strokeWidth="1.5" />
            <path d="M9 9l3 3 3-3" stroke="currentColor" strokeWidth="1.5" />
            <path d="M6 14h12v4H6z" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
          </svg>
        </span>
      </button>
      <button className="v3s-toolbtn" title="Subdivide Selected" aria-label="Subdivide Selected" onClick={subdivideSelected}>
        <span className="v3s-toolbtn__icon" aria-hidden>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="5" width="14" height="14" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
          </svg>
        </span>
      </button>

      <div className="v3s-toolshelf__divider" />

      {/* Duplicate / Delete */}
      <button className="v3s-toolbtn" title="Duplicate (Shift+D)" aria-label="Duplicate" onClick={() => {
        const sel = useSceneStore.getState().selectedId
        if (!sel) return
        const src = useSceneStore.getState().objects[sel]
        if (!src) return
        const id = `obj_${Math.random().toString(36).slice(2, 8)}`
        executeCommand({ type: 'AddObject', payload: {
          id,
          type: src.type,
          transform: {
            position: [src.transform.position[0]+0.5, src.transform.position[1], src.transform.position[2]+0.5],
            rotation: [...src.transform.rotation],
            scale: [...src.transform.scale]
          },
          props: src.props
        } })
        selectObject(id)
      }}>
        <span className="v3s-toolbtn__icon" aria-hidden>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="7" width="10" height="10" stroke="currentColor" strokeWidth="1.5" />
            <rect x="9" y="11" width="10" height="10" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
          </svg>
        </span>
      </button>
      <button className="v3s-toolbtn" title="Delete (Del)" aria-label="Delete" onClick={() => {
        const sel = useSceneStore.getState().selectedId
        if (!sel) return
        executeCommand({ type: 'RemoveObject', payload: { id: sel } })
        selectObject(null)
      }}>
        <span className="v3s-toolbtn__icon" aria-hidden>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 3h6l1 2h4v2H4V5h4l1-2z" fill="currentColor" />
            <path d="M6 9h12l-1 10H7L6 9z" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </span>
      </button>
    </nav>
  )
}
