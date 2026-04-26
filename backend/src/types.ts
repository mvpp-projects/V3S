export type SceneRole = "owner" | "editor" | "viewer";

export type ObjectType = "cube" | "sphere" | "torus" | "cone" | "pointLight";

export type Vec3 = [number, number, number];

export interface Transform {
  position: Vec3;
  rotation: Vec3;
  scale: Vec3;
}

export interface ObjectProps {
  color?: string;
  baseColor?: string;
  roughness?: number;
  metalness?: number;
  radius?: number;
  tube?: number;
  radialSegments?: number;
  tubularSegments?: number;
  height?: number;
  intensity?: number;
  distance?: number;
  decay?: number;
}

export interface SceneObject {
  id: string;
  type: ObjectType;
  transform: Transform;
  props?: ObjectProps;
  version: number;
  updatedAt: string;
  updatedBy: string;
}

export interface Scene {
  id: string;
  name: string;
  createdBy: string;
  createdAt: string;
}

export interface SceneMember {
  sceneId: string;
  userId: string;
  role: SceneRole;
}

export interface SceneInvite {
  token: string;
  sceneId: string;
  role: Exclude<SceneRole, "owner">;
  createdBy: string;
  expiresAt: string;
  maxUses: number;
  uses: number;
}

export interface User {
  id: string;
  email: string;
  displayName: string;
  password: string;
}

export interface UserOptions {
  snapEnabled: boolean;
  gridVisible: boolean;
  theme: "light" | "dark" | "system";
}

export interface Presence {
  userId: string;
  cursor?: { x: number; y: number };
  selection?: string[];
  color: string;
  lastSeenAt: string;
}

export interface AccessTokenPayload {
  sub: string;
  email: string;
  displayName: string;
}
