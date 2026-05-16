import React, { useMemo, useState } from 'react'
import './PropertiesPanel.css'
import { Card, Input } from './ui'
import { useSceneStore } from '../state/sceneStore'

export default function PropertiesPanel() {
  const [open, setOpen] = useState({ transform: true, material: false, lighting: false })
  const toggle = (key: 'transform' | 'material' | 'lighting') => setOpen((s) => ({ ...s, [key]: !s[key] }))
  const selectedId = useSceneStore(s => s.selectedId)
  const obj = useSceneStore(s => (selectedId ? s.objects[selectedId] : undefined))
  const updateTransform = useSceneStore(s => s.updateTransform)
  const upsertObject = useSceneStore(s => s.upsertObject)
  const isLight = obj?.type === 'pointLight'

  const transform = useMemo(() => obj?.transform ?? { position: [0,0,0], rotation: [0,0,0], scale: [1,1,1] }, [obj])
  const setVal = (group: 'position'|'rotation'|'scale', idx: 0|1|2, val: number) => {
    if (!obj) return
    const next = { ...transform, [group]: [...(transform as any)[group]] }
    ;(next as any)[group][idx] = val
    updateTransform(obj.id, next as any)
  }
  const material = useMemo(() => {
    const p = obj?.props ?? {}
    return {
      baseColor: (p.baseColor as string) ?? (p.color as string) ?? '#ffffff',
      roughness: typeof p.roughness === 'number' ? p.roughness : 0.5,
      metalness: typeof p.metalness === 'number' ? p.metalness : 0.0
    }
  }, [obj])

  const setMaterialVal = (key: 'baseColor' | 'roughness' | 'metalness', val: string | number) => {
    if (!obj) return
    const base = obj.props ?? {}
    const nextProps =
      key === 'baseColor'
        ? { ...base, baseColor: val, color: val }
        : { ...base, [key]: val }
    upsertObject({ ...obj, props: nextProps })
  }
  return (
    <aside className="v3s-properties">
      <div className="v3s-properties__stack">
        <Card 
          title="Transform" 
          collapsible 
          defaultCollapsed={false}
        >
          {obj ? (
            <div className="v3s-formgrid">
              <div className="v3s-formrow">
                <Input 
                  id="pos-x"
                  label="Position X" 
                  type="number" 
                  step={0.01} 
                  value={transform.position[0]} 
                  onChange={(e)=>setVal('position',0,parseFloat(e.target.value))} 
                />
                <Input 
                  id="pos-y"
                  label="Position Y" 
                  type="number" 
                  step={0.01} 
                  value={transform.position[1]} 
                  onChange={(e)=>setVal('position',1,parseFloat(e.target.value))} 
                />
                <Input 
                  id="pos-z"
                  label="Position Z" 
                  type="number" 
                  step={0.01} 
                  value={transform.position[2]} 
                  onChange={(e)=>setVal('position',2,parseFloat(e.target.value))} 
                />
              </div>
              <div className="v3s-formrow">
                <Input 
                  id="rot-x"
                  label="Rotation X (rad)" 
                  type="number" 
                  step={0.01} 
                  value={transform.rotation[0]} 
                  onChange={(e)=>setVal('rotation',0,parseFloat(e.target.value))} 
                />
                <Input 
                  id="rot-y"
                  label="Rotation Y (rad)" 
                  type="number" 
                  step={0.01} 
                  value={transform.rotation[1]} 
                  onChange={(e)=>setVal('rotation',1,parseFloat(e.target.value))} 
                />
                <Input 
                  id="rot-z"
                  label="Rotation Z (rad)" 
                  type="number" 
                  step={0.01} 
                  value={transform.rotation[2]} 
                  onChange={(e)=>setVal('rotation',2,parseFloat(e.target.value))} 
                />
              </div>
              <div className="v3s-formrow">
                <Input 
                  id="scl-x"
                  label="Scale X" 
                  type="number" 
                  step={0.01} 
                  value={transform.scale[0]} 
                  onChange={(e)=>setVal('scale',0,parseFloat(e.target.value))} 
                />
                <Input 
                  id="scl-y"
                  label="Scale Y" 
                  type="number" 
                  step={0.01} 
                  value={transform.scale[1]} 
                  onChange={(e)=>setVal('scale',1,parseFloat(e.target.value))} 
                />
                <Input 
                  id="scl-z"
                  label="Scale Z" 
                  type="number" 
                  step={0.01} 
                  value={transform.scale[2]} 
                  onChange={(e)=>setVal('scale',2,parseFloat(e.target.value))} 
                />
              </div>
            </div>
          ) : (
            <div style={{ color: 'var(--text-600)' }}>Select an object to edit transforms.</div>
          )}
        </Card>

        {!isLight && (
          <Card 
            title="Material" 
            collapsible 
            defaultCollapsed={true}
          >
            {obj ? (
              <div className="v3s-formgrid">
                <Input 
                  id="base-color"
                  label="Base Color" 
                  type="color" 
                  value={material.baseColor} 
                  onChange={(e) => setMaterialVal('baseColor', e.target.value)} 
                />
                <Input 
                  id="roughness"
                  label="Roughness" 
                  type="number" 
                  step={0.01} 
                  min={0} 
                  max={1} 
                  value={material.roughness} 
                  onChange={(e) => {
                    const v = parseFloat(e.target.value)
                    if (Number.isNaN(v)) return
                    setMaterialVal('roughness', v)
                  }} 
                />
                <Input 
                  id="metalness"
                  label="Metalness" 
                  type="number" 
                  step={0.01} 
                  min={0} 
                  max={1} 
                  value={material.metalness} 
                  onChange={(e) => {
                    const v = parseFloat(e.target.value)
                    if (Number.isNaN(v)) return
                    setMaterialVal('metalness', v)
                  }} 
                />
              </div>
            ) : (
              <div style={{ color: 'var(--text-600)' }}>Select an object to edit material.</div>
            )}
          </Card>
        )}

        {isLight && (
          <Card 
            title="Light" 
            collapsible 
            defaultCollapsed={true}
          >
            {obj ? (
              <div className="v3s-formgrid">
                <Input 
                  id="light-color"
                  label="Color" 
                  type="color" 
                  value={(obj.props?.color as string) ?? '#ffffff'} 
                  onChange={(e) => upsertObject({
                    ...obj,
                    props: { ...(obj.props ?? {}), color: e.target.value }
                  })} 
                />
                <Input 
                  id="intensity"
                  label="Intensity" 
                  type="number" 
                  step={0.1} 
                  min={0} 
                  max={10} 
                  value={typeof obj.props?.intensity === 'number' ? obj.props.intensity : 1.5} 
                  onChange={(e) => {
                    const v = parseFloat(e.target.value)
                    if (Number.isNaN(v)) return
                    upsertObject({
                      ...obj,
                      props: { ...(obj.props ?? {}), intensity: v }
                    })
                  }} 
                />
                <Input 
                  id="distance"
                  label="Distance" 
                  type="number" 
                  step={0.5} 
                  min={0} 
                  value={typeof obj.props?.distance === 'number' ? obj.props.distance : 0} 
                  onChange={(e) => {
                    const v = parseFloat(e.target.value)
                    if (Number.isNaN(v)) return
                    upsertObject({
                      ...obj,
                      props: { ...(obj.props ?? {}), distance: v }
                    })
                  }} 
                />
                <Input 
                  id="decay"
                  label="Decay" 
                  type="number" 
                  step={0.1} 
                  min={0} 
                  value={typeof obj.props?.decay === 'number' ? obj.props.decay : 2} 
                  onChange={(e) => {
                    const v = parseFloat(e.target.value)
                    if (Number.isNaN(v)) return
                    upsertObject({
                      ...obj,
                      props: { ...(obj.props ?? {}), decay: v }
                    })
                  }} 
                />
              </div>
            ) : (
              <div style={{ color: 'var(--text-600)' }}>Select an object to edit lighting.</div>
            )}
          </Card>
        )}
      </div>
    </aside>
  )
}
