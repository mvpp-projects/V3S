"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInviteSchema = exports.createSceneSchema = exports.presenceSelectionSchema = exports.presenceCursorSchema = exports.objectRemoveSchema = exports.objectMutationSchema = exports.sceneJoinSchema = exports.sceneObjectSchema = exports.patchOptionsSchema = exports.refreshSchema = exports.loginSchema = void 0;
const zod_1 = require("zod");
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(1)
});
exports.refreshSchema = zod_1.z.object({
    refreshToken: zod_1.z.string().min(1)
});
exports.patchOptionsSchema = zod_1.z.object({
    snapEnabled: zod_1.z.boolean().optional(),
    gridVisible: zod_1.z.boolean().optional(),
    theme: zod_1.z.enum(["light", "dark", "system"]).optional()
});
const vector3Schema = zod_1.z.tuple([zod_1.z.number(), zod_1.z.number(), zod_1.z.number()]);
const objectPropsSchema = zod_1.z.object({
    color: zod_1.z.string().optional(),
    baseColor: zod_1.z.string().optional(),
    roughness: zod_1.z.number().min(0).max(1).optional(),
    metalness: zod_1.z.number().min(0).max(1).optional(),
    radius: zod_1.z.number().positive().optional(),
    tube: zod_1.z.number().positive().optional(),
    radialSegments: zod_1.z.number().int().min(3).optional(),
    tubularSegments: zod_1.z.number().int().min(3).optional(),
    height: zod_1.z.number().positive().optional(),
    intensity: zod_1.z.number().min(0).optional(),
    distance: zod_1.z.number().min(0).optional(),
    decay: zod_1.z.number().min(0).optional()
}).partial();
exports.sceneObjectSchema = zod_1.z.object({
    id: zod_1.z.string().min(1).max(64),
    type: zod_1.z.enum(["cube", "sphere", "torus", "cone", "pointLight"]),
    transform: zod_1.z.object({
        position: vector3Schema,
        rotation: vector3Schema,
        scale: vector3Schema.refine(([x, y, z]) => x > 0 && y > 0 && z > 0, {
            message: "Scale values must be positive"
        })
    }),
    props: objectPropsSchema.optional(),
    version: zod_1.z.number().int().min(0).optional(),
    updatedAt: zod_1.z.string().datetime().optional(),
    updatedBy: zod_1.z.string().optional()
});
exports.sceneJoinSchema = zod_1.z.object({
    sceneId: zod_1.z.string().min(1),
    token: zod_1.z.string().min(1)
});
exports.objectMutationSchema = zod_1.z.object({
    sceneId: zod_1.z.string().min(1),
    opId: zod_1.z.string().min(1).max(100),
    object: exports.sceneObjectSchema
});
exports.objectRemoveSchema = zod_1.z.object({
    sceneId: zod_1.z.string().min(1),
    opId: zod_1.z.string().min(1).max(100),
    objectId: zod_1.z.string().min(1).max(64),
    expectedVersion: zod_1.z.number().int().min(1).optional()
});
exports.presenceCursorSchema = zod_1.z.object({
    sceneId: zod_1.z.string().min(1),
    x: zod_1.z.number().min(0).max(100),
    y: zod_1.z.number().min(0).max(100)
});
exports.presenceSelectionSchema = zod_1.z.object({
    sceneId: zod_1.z.string().min(1),
    selection: zod_1.z.array(zod_1.z.string().min(1).max(64)).max(200)
});
exports.createSceneSchema = zod_1.z.object({
    name: zod_1.z.string().min(1).max(120).default("Untitled Scene")
});
exports.createInviteSchema = zod_1.z.object({
    role: zod_1.z.enum(["editor", "viewer"]),
    expiresInMinutes: zod_1.z.number().int().min(5).max(60 * 24 * 7).default(60 * 24),
    maxUses: zod_1.z.number().int().min(1).max(100).default(20)
});
