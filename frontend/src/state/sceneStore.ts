import { create } from 'zustand'

export type Object3D = {
  id: string
  type: 'cube' | 'sphere'
  transform: { position: number[]; rotation: number[]; scale: number[] }
  props?: Record<string, any>
}

export type Presence = { userId: string; cursor?: { x: number; y: number }; selection?: string[]; color?: string }

type SceneState = {
  currentSceneId: string | null
  objects: Record<string, Object3D>
  selectedId: string | null
  gizmoMode: 'translate' | 'rotate' | 'scale'
  axisConstraint: 'none' | 'x' | 'y' | 'z'
  presence: Record<string, Presence>
  setSnapshot: (objects: Record<string, Object3D>) => void
  upsertObject: (obj: Object3D) => void
  removeObject: (id: string) => void
  selectObject: (id: string | null) => void
  updateTransform: (id: string, transform: Object3D['transform']) => void
  setGizmoMode: (mode: 'translate' | 'rotate' | 'scale') => void
  setAxisConstraint: (axis: 'none' | 'x' | 'y' | 'z') => void
  setPresence: (p: Presence) => void
}

export const useSceneStore = create<SceneState>((set) => ({
  currentSceneId: null,
  objects: {},
  selectedId: null,
  gizmoMode: 'translate',
  axisConstraint: 'none',
  presence: {},
  setSnapshot: (objects) => set({ objects }),
  upsertObject: (obj) => set((s) => ({ objects: { ...s.objects, [obj.id]: obj } })),
  removeObject: (id) => set((s) => {
    const { [id]: _, ...rest } = s.objects
    return { objects: rest }
  }),
  selectObject: (id) => set({ selectedId: id }),
  updateTransform: (id, transform) => set((s) => ({ objects: { ...s.objects, [id]: { ...s.objects[id], transform } } })),
  setGizmoMode: (mode) => set({ gizmoMode: mode }),
  setAxisConstraint: (axis) => set({ axisConstraint: axis }),
  setPresence: (p) => set((s) => ({ presence: { ...s.presence, [p.userId]: p } }))
}))
