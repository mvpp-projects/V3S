import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1)
});

export const refreshSchema = z.object({
  refreshToken: z.string().min(1)
});

export const patchOptionsSchema = z.object({
  snapEnabled: z.boolean().optional(),
  gridVisible: z.boolean().optional(),
  theme: z.enum(["light", "dark", "system"]).optional()
});

const vector3Schema = z.tuple([z.number(), z.number(), z.number()]);

const objectPropsSchema = z.object({
  color: z.string().optional(),
  baseColor: z.string().optional(),
  roughness: z.number().min(0).max(1).optional(),
  metalness: z.number().min(0).max(1).optional(),
  radius: z.number().positive().optional(),
  tube: z.number().positive().optional(),
  radialSegments: z.number().int().min(3).optional(),
  tubularSegments: z.number().int().min(3).optional(),
  height: z.number().positive().optional(),
  intensity: z.number().min(0).optional(),
  distance: z.number().min(0).optional(),
  decay: z.number().min(0).optional()
}).partial();

export const sceneObjectSchema = z.object({
  id: z.string().min(1).max(64),
  type: z.enum(["cube", "sphere", "torus", "cone", "pointLight"]),
  transform: z.object({
    position: vector3Schema,
    rotation: vector3Schema,
    scale: vector3Schema.refine(([x, y, z]) => x > 0 && y > 0 && z > 0, {
      message: "Scale values must be positive"
    })
  }),
  props: objectPropsSchema.optional(),
  version: z.number().int().min(0).optional(),
  updatedAt: z.string().datetime().optional(),
  updatedBy: z.string().optional()
});

export const sceneJoinSchema = z.object({
  sceneId: z.string().min(1),
  token: z.string().min(1)
});

export const objectMutationSchema = z.object({
  sceneId: z.string().min(1),
  opId: z.string().min(1).max(100),
  object: sceneObjectSchema
});

export const objectRemoveSchema = z.object({
  sceneId: z.string().min(1),
  opId: z.string().min(1).max(100),
  objectId: z.string().min(1).max(64),
  expectedVersion: z.number().int().min(1).optional()
});

export const presenceCursorSchema = z.object({
  sceneId: z.string().min(1),
  x: z.number().min(0).max(100),
  y: z.number().min(0).max(100)
});

export const presenceSelectionSchema = z.object({
  sceneId: z.string().min(1),
  selection: z.array(z.string().min(1).max(64)).max(200)
});

export const createSceneSchema = z.object({
  name: z.string().min(1).max(120).default("Untitled Scene")
});

export const createInviteSchema = z.object({
  role: z.enum(["editor", "viewer"]),
  expiresInMinutes: z.number().int().min(5).max(60 * 24 * 7).default(60 * 24),
  maxUses: z.number().int().min(1).max(100).default(20)
});
