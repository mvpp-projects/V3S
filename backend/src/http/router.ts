import { Router } from "express";
import { authRouter } from "./routes/auth";
import { invitesRouter } from "./routes/invites";
import { meRouter } from "./routes/me";
import { scenesRouter } from "./routes/scenes";

export const apiRouter = Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/me", meRouter);
apiRouter.use("/scenes", scenesRouter);
apiRouter.use("/invites", invitesRouter);
