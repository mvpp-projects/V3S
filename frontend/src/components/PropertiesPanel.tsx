import React, { useMemo, useState } from 'react'
import './PropertiesPanel.css'
import Panel from './Panel'
import { useSceneStore } from '../state/sceneStore'

export default function PropertiesPanel() {
  const [open, setOpen] = useState({ transform: true, material: false, metadata: false })
  const toggle = (key: keyof typeof open) => setOpen((s) => ({ ...s, [key]: !s[key] }))
  const selectedId = useSceneStore(s => s.selectedId)
  const obj = useSceneStore(s => (selectedId ? s.objects[selectedId] : undefined))
  const updateTransform = useSceneStore(s => s.updateTransform)

  const transform = useMemo(() => obj?.transform ?? { position: [0,0,0], rotation: [0,0,0], scale: [1,1,1] }, [obj])
  const setVal = (group: 'position'|'rotation'|'scale', idx: 0|1|2, val: number) => {
    if (!obj) return
    const next = { ...transform, [group]: [...(transform as any)[group]] }
    ;(next as any)[group][idx] = val
    updateTransform(obj.id, next as any)
  }
  return (
    <aside className="v3s-properties">
      <Panel className="v3s-properties__section">
        <div className="v3s-properties__stack">
          <button className="v3s-dropdown__header" onClick={() => toggle('transform')} aria-expanded={open.transform}>
            <span className={`v3s-dropdown__chev ${open.transform ? 'open' : ''}`}>▸</span>
            Transform
          </button>
          {open.transform && (
            <div className="v3s-dropdown__content">
              {obj ? (
              <div className="v3s-formgrid">
                <label>Position</label>
                <div className="v3s-formrow">
                  <input type="number" step="0.01" value={transform.position[0]} onChange={(e)=>setVal('position',0,parseFloat(e.target.value))} />
                  <input type="number" step="0.01" value={transform.position[1]} onChange={(e)=>setVal('position',1,parseFloat(e.target.value))} />
                  <input type="number" step="0.01" value={transform.position[2]} onChange={(e)=>setVal('position',2,parseFloat(e.target.value))} />
                </div>
                <label>Rotation (rad)</label>
                <div className="v3s-formrow">
                  <input type="number" step="0.01" value={transform.rotation[0]} onChange={(e)=>setVal('rotation',0,parseFloat(e.target.value))} />
                  <input type="number" step="0.01" value={transform.rotation[1]} onChange={(e)=>setVal('rotation',1,parseFloat(e.target.value))} />
                  <input type="number" step="0.01" value={transform.rotation[2]} onChange={(e)=>setVal('rotation',2,parseFloat(e.target.value))} />
                </div>
                <label>Scale</label>
                <div className="v3s-formrow">
                  <input type="number" step="0.01" value={transform.scale[0]} onChange={(e)=>setVal('scale',0,parseFloat(e.target.value))} />
                  <input type="number" step="0.01" value={transform.scale[1]} onChange={(e)=>setVal('scale',1,parseFloat(e.target.value))} />
                  <input type="number" step="0.01" value={transform.scale[2]} onChange={(e)=>setVal('scale',2,parseFloat(e.target.value))} />
                </div>
              </div>
              ) : (
                <div style={{ color: 'var(--text-600)' }}>Select an object to edit transforms.</div>
              )}
            </div>
          )}

          <button className="v3s-dropdown__header" onClick={() => toggle('material')} aria-expanded={open.material}>
            <span className={`v3s-dropdown__chev ${open.material ? 'open' : ''}`}>▸</span>
            Material
          </button>
          {open.material && (
            <div className="v3s-dropdown__content">
              <div style={{ color: 'var(--text-600)' }}>Base Color · Roughness · Metalness</div>
            </div>
          )}

          <button className="v3s-dropdown__header" onClick={() => toggle('metadata')} aria-expanded={open.metadata}>
            <span className={`v3s-dropdown__chev ${open.metadata ? 'open' : ''}`}>▸</span>
            Metadata
          </button>
          {open.metadata && (
            <div className="v3s-dropdown__content">
              <div style={{ color: 'var(--text-600)' }}>Name · Tags · Notes</div>
            </div>
          )}
        </div>
      </Panel>
    </aside>
  )
}
