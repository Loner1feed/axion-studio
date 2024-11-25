import express from "express";
import { createUserController, loginController } from "@controllers/index";
import { validateUser } from "@utils/validations";

const router = express.Router();

router.use(express.json());

// router.post("/register", [validateUser, checkAuth], createUserController);
router.post("/register", validateUser, createUserController);

router.post("/login", validateUser, loginController);

export default router;
