import { create } from 'zustand'

export type Object3D = {
  id: string
  // geometry primitives and light sources
  type: 'cube' | 'sphere' | 'pointLight'
  transform: { position: number[]; rotation: number[]; scale: number[] }
  props?: Record<string, any>
  version?: number
  updatedAt?: string
  updatedBy?: string
}

export type Presence = { userId: string; cursor?: { x: number; y: number }; selection?: string[]; color?: string }

export type SelectedFace = {
  objectId: string
  normal: [number, number, number]
}

export type LightingState = {
  ambientIntensity: number
  directionalIntensity: number
}

type CommandPayload =
  | { type: 'AddObject'; payload: Object3D }
  | { type: 'RemoveObject'; payload: { id: string } }
  | { type: 'UpdateTransform'; payload: { id: string; transform: Object3D['transform'] } }
  | { type: 'ExtrudeObject'; payload: { id: string; axis: 'x' | 'y' | 'z'; amount: number } }
  | { type: 'SubdivideObject'; payload: { id: string; delta: number } }

type CommandRecord = {
  command: CommandPayload
  inverse: CommandPayload
}

type SceneState = {
  currentSceneId: string | null
  objects: Record<string, Object3D>
  selectedId: string | null
  selectedFace: SelectedFace | null
  gizmoMode: 'translate' | 'rotate' | 'scale'
  axisConstraint: 'none' | 'x' | 'y' | 'z'
  presence: Record<string, Presence>
  lighting: LightingState
  undoStack: CommandRecord[]
  redoStack: CommandRecord[]
  executeCommand: (cmd: CommandPayload) => void
  undo: () => void
  redo: () => void
  setSnapshot: (objects: Record<string, Object3D>) => void
  setCurrentSceneId: (sceneId: string | null) => void
  upsertObject: (obj: Object3D) => void
  removeObject: (id: string) => void
  selectObject: (id: string | null) => void
  setSelectedFace: (face: SelectedFace | null) => void
  updateTransform: (id: string, transform: Object3D['transform']) => void
  setGizmoMode: (mode: 'translate' | 'rotate' | 'scale') => void
  setAxisConstraint: (axis: 'none' | 'x' | 'y' | 'z') => void
  setPresence: (p: Presence) => void
  removePresence: (userId: string) => void
  setLighting: (lighting: Partial<LightingState>) => void
}

export const useSceneStore = create<SceneState>((set, get) => ({
  currentSceneId: null,
  objects: {},
  selectedId: null,
  selectedFace: null,
  gizmoMode: 'translate',
  axisConstraint: 'none',
  presence: {},
   lighting: {
     ambientIntensity: 0.8,
     directionalIntensity: 0.6
   },
  undoStack: [],
  redoStack: [],
  executeCommand: (cmd) => {
    const state = get()
    const apply = (command: CommandPayload) => {
      if (command.type === 'AddObject') {
        const obj = command.payload
        set((s) => ({ objects: { ...s.objects, [obj.id]: obj } }))
        return { type: 'RemoveObject', payload: { id: obj.id } } as CommandPayload
      }

      if (command.type === 'RemoveObject') {
        const { id } = command.payload
        const existing = get().objects[id]
        if (!existing) return null
        set((s) => {
          const { [id]: _, ...rest } = s.objects
          return { objects: rest }
        })
        return { type: 'AddObject', payload: existing } as CommandPayload
      }

      if (command.type === 'UpdateTransform') {
        const { id, transform } = command.payload
        const existing = get().objects[id]
        if (!existing) return null
        const previousTransform = existing.transform
        set((s) => ({ objects: { ...s.objects, [id]: { ...existing, transform } } }))
        return { type: 'UpdateTransform', payload: { id, transform: previousTransform } } as CommandPayload
      }

      if (command.type === 'ExtrudeObject') {
        const { id, axis, amount } = command.payload
        const existing = get().objects[id]
        if (!existing) return null
        const axisIndex = axis === 'x' ? 0 : axis === 'y' ? 1 : 2
        const nextTransform = {
          position: [...existing.transform.position],
          rotation: [...existing.transform.rotation],
          scale: [...existing.transform.scale]
        }
        nextTransform.scale[axisIndex] = Math.max(0.05, nextTransform.scale[axisIndex] + amount)
        nextTransform.position[axisIndex] += amount / 2
        set((s) => ({ objects: { ...s.objects, [id]: { ...existing, transform: nextTransform } } }))
        return { type: 'ExtrudeObject', payload: { id, axis, amount: -amount } } as CommandPayload
      }

      if (command.type === 'SubdivideObject') {
        const { id, delta } = command.payload
        const existing = get().objects[id]
        if (!existing) return null
        const currentSegments = typeof existing.props?.segments === 'number' ? existing.props.segments : 1
        const nextSegments = Math.max(1, Math.min(64, currentSegments + delta))
        const nextProps = { ...(existing.props ?? {}), segments: nextSegments }
        set((s) => ({ objects: { ...s.objects, [id]: { ...existing, props: nextProps } } }))
        return { type: 'SubdivideObject', payload: { id, delta: -delta } } as CommandPayload
      }

      return null
    }

    const inverse = apply(cmd)
    if (!inverse) return
    const record = { command: cmd, inverse }
    set((s) => ({ undoStack: [...s.undoStack, record], redoStack: [] }))
  },
  undo: () => {
    const state = get()
    const record = state.undoStack[state.undoStack.length - 1]
    if (!record) return
    set((s) => ({ undoStack: s.undoStack.slice(0, -1), redoStack: [...s.redoStack, record] }))
    void ((): void => {
      const cmd = record.inverse
      if (cmd.type === 'AddObject') {
        const obj = cmd.payload
        set((s) => ({ objects: { ...s.objects, [obj.id]: obj } }))
      } else if (cmd.type === 'RemoveObject') {
        const { id } = cmd.payload
        set((s) => {
          const { [id]: _, ...rest } = s.objects
          return { objects: rest }
        })
      } else if (cmd.type === 'UpdateTransform') {
        const { id, transform } = cmd.payload
        const existing = get().objects[id]
        if (!existing) return
        set((s) => ({ objects: { ...s.objects, [id]: { ...existing, transform } } }))
      } else if (cmd.type === 'ExtrudeObject') {
        const { id, axis, amount } = cmd.payload
        const existing = get().objects[id]
        if (!existing) return
        const axisIndex = axis === 'x' ? 0 : axis === 'y' ? 1 : 2
        const nextTransform = {
          position: [...existing.transform.position],
          rotation: [...existing.transform.rotation],
          scale: [...existing.transform.scale]
        }
        nextTransform.scale[axisIndex] = Math.max(0.05, nextTransform.scale[axisIndex] + amount)
        nextTransform.position[axisIndex] += amount / 2
        set((s) => ({ objects: { ...s.objects, [id]: { ...existing, transform: nextTransform } } }))
      } else if (cmd.type === 'SubdivideObject') {
        const { id, delta } = cmd.payload
        const existing = get().objects[id]
        if (!existing) return
        const currentSegments = typeof existing.props?.segments === 'number' ? existing.props.segments : 1
        const nextSegments = Math.max(1, Math.min(64, currentSegments + delta))
        const nextProps = { ...(existing.props ?? {}), segments: nextSegments }
        set((s) => ({ objects: { ...s.objects, [id]: { ...existing, props: nextProps } } }))
      }
    })()
  },
  redo: () => {
    const state = get()
    const record = state.redoStack[state.redoStack.length - 1]
    if (!record) return
    set((s) => ({ redoStack: s.redoStack.slice(0, -1), undoStack: [...s.undoStack, record] }))
    void ((): void => {
      const cmd = record.command
      if (cmd.type === 'AddObject') {
        const obj = cmd.payload
        set((s) => ({ objects: { ...s.objects, [obj.id]: obj } }))
      } else if (cmd.type === 'RemoveObject') {
        const { id } = cmd.payload
        set((s) => {
          const { [id]: _, ...rest } = s.objects
          return { objects: rest }
        })
      } else if (cmd.type === 'UpdateTransform') {
        const { id, transform } = cmd.payload
        const existing = get().objects[id]
        if (!existing) return
        set((s) => ({ objects: { ...s.objects, [id]: { ...existing, transform } } }))
      } else if (cmd.type === 'ExtrudeObject') {
        const { id, axis, amount } = cmd.payload
        const existing = get().objects[id]
        if (!existing) return
        const axisIndex = axis === 'x' ? 0 : axis === 'y' ? 1 : 2
        const nextTransform = {
          position: [...existing.transform.position],
          rotation: [...existing.transform.rotation],
          scale: [...existing.transform.scale]
        }
        nextTransform.scale[axisIndex] = Math.max(0.05, nextTransform.scale[axisIndex] + amount)
        nextTransform.position[axisIndex] += amount / 2
        set((s) => ({ objects: { ...s.objects, [id]: { ...existing, transform: nextTransform } } }))
      } else if (cmd.type === 'SubdivideObject') {
        const { id, delta } = cmd.payload
        const existing = get().objects[id]
        if (!existing) return
        const currentSegments = typeof existing.props?.segments === 'number' ? existing.props.segments : 1
        const nextSegments = Math.max(1, Math.min(64, currentSegments + delta))
        const nextProps = { ...(existing.props ?? {}), segments: nextSegments }
        set((s) => ({ objects: { ...s.objects, [id]: { ...existing, props: nextProps } } }))
      }
    })()
  },
  setSnapshot: (objects) => set({ objects }),
  setCurrentSceneId: (sceneId) => set({ currentSceneId: sceneId }),
  upsertObject: (obj) => set((s) => ({ objects: { ...s.objects, [obj.id]: obj } })),
  removeObject: (id) => set((s) => {
    const { [id]: _, ...rest } = s.objects
    return { objects: rest }
  }),
  selectObject: (id) => set({ selectedId: id, selectedFace: null }),
  setSelectedFace: (face) => set({ selectedFace: face }),
  updateTransform: (id, transform) => set((s) => {
    const existing = s.objects[id]
    if (!existing) {
      return s
    }
    return { objects: { ...s.objects, [id]: { ...existing, transform } } }
  }),
  setGizmoMode: (mode) => set({ gizmoMode: mode }),
  setAxisConstraint: (axis) => set({ axisConstraint: axis }),
  setPresence: (p) => set((s) => ({ presence: { ...s.presence, [p.userId]: p } })),
  removePresence: (userId) => set((s) => {
    const { [userId]: _, ...rest } = s.presence
    return { presence: rest }
  }),
  setLighting: (lighting) => set((s) => ({ lighting: { ...s.lighting, ...lighting } }))
}))
