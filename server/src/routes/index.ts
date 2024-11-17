import { Request, Response, Router } from "express";

import usersRoutes from "./users.routes";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).send("server is alive");
});

// mount routes here 👇
router.use("/users", usersRoutes);

export default router;
