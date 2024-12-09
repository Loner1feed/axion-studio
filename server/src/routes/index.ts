import { Request, Response, Router } from "express";

import usersRoutes from "./users.routes";
import projectTypesRoute from "./project-types.routes";
import technologiesRoute from "./technologies.routes";
import processesRoute from "./process.routes";
import socialsRoute from "./socials.routes";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).send("server is alive");
});

// mount routes here 👇
router.use("/users", usersRoutes);
router.use("/projectTypes", projectTypesRoute);
router.use("/technologies", technologiesRoute);
router.use("/processes", processesRoute);
router.use("/socials", socialsRoute);

export default router;
