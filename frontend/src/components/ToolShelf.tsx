import React from 'react'
import './ToolShelf.css'
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
  const upsertObject = useSceneStore(s => s.upsertObject)
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
    upsertObject({
      id,
      type: 'cube',
      transform: { position: [0, 0.5, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
      props: { color: '#8b9ca7' }
    })
    selectObject(id)
    setAxisConstraint('none')
  }
  const addSphere = () => {
    const id = `obj_${Math.random().toString(36).slice(2, 8)}`
    upsertObject({
      id,
      type: 'sphere',
      transform: { position: [0, 0.5, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
      props: { color: '#9aa8a0' }
    })
    selectObject(id)
  }
  return (
    <nav className="v3s-toolshelf">
      {tools.map(t => {
        const active = (t.key === 'Move' && gizmoMode === 'translate') || (t.key === 'Rotate' && gizmoMode === 'rotate') || (t.key === 'Scale' && gizmoMode === 'scale')
        return (
        <button key={t.key} className={`v3s-toolbtn ${active ? 'v3s-toolbtn--active' : ''}`} title={t.label} aria-label={t.label} onClick={t.onClick}>
          <span className="v3s-toolbtn__icon" aria-hidden>{Icon[t.key]}</span>
        </button>
      )})}
      <button className="v3s-toolbtn" title="Add Cube" aria-label="Add Cube" onClick={addCube}>
              {/* Axis locks removed per request */}
        <span className="v3s-toolbtn__icon" aria-hidden>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="6" width="12" height="12" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </span>
      </button>
      <button className="v3s-toolbtn" title="Add Sphere" aria-label="Add Sphere" onClick={addSphere}>
        <span className="v3s-toolbtn__icon" aria-hidden>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </span>
      </button>
      {/* Duplicate / Delete */}
      <button className="v3s-toolbtn" title="Duplicate (Shift+D)" aria-label="Duplicate" onClick={() => {
        const sel = useSceneStore.getState().selectedId
        if (!sel) return
        const src = useSceneStore.getState().objects[sel]
        if (!src) return
        const id = `obj_${Math.random().toString(36).slice(2, 8)}`
        upsertObject({
          id,
          type: src.type,
          transform: {
            position: [src.transform.position[0]+0.5, src.transform.position[1], src.transform.position[2]+0.5],
            rotation: [...src.transform.rotation],
            scale: [...src.transform.scale]
          },
          props: src.props
        })
        selectObject(id)
      }}>
        <span className="v3s-toolbtn__icon" aria-hidden>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="7" width="10" height="10" stroke="currentColor" strokeWidth="1.5" />
            <rect x="9" y="11" width="10" height="10" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
          </svg>
        </span>
      </button>
      <button className="v3s-toolbtn" title="Delete (Del)" aria-label="Delete" onClick={() => {
        const sel = useSceneStore.getState().selectedId
        if (!sel) return
        useSceneStore.getState().removeObject(sel)
        selectObject(null)
      }}>
        <span className="v3s-toolbtn__icon" aria-hidden>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 3h6l1 2h4v2H4V5h4l1-2z" fill="currentColor" />
            <path d="M6 9h12l-1 10H7L6 9z" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </span>
      </button>
    </nav>
  )
}
