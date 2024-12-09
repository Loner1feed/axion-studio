import {
  createProcessController,
  deleteProcessController,
  getProcessByIdController,
  getProcessesController,
  getProcessesWithParamsController,
  updateProcessController,
} from "@controllers/index";
import { validateParams, validateProcess } from "@utils/validations";
import express from "express";

const router = express.Router();

router.use(express.json());

// get all processes
router.get("/", getProcessesController);

// get process by id
router.get("/:id/", getProcessByIdController);

// get processes with params
router.post("/", [validateParams], getProcessesWithParamsController);

// create process
router.post("/create", [validateProcess], createProcessController);

// update process
router.put("/:id/", [validateProcess], updateProcessController);

// delete process
router.delete("/:id/", deleteProcessController);

export default router;
