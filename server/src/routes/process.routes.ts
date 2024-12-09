import {
  createProcessController,
  deleteProcessController,
  getProcessByIdController,
  getProcessesController,
  getProcessesWithParamsController,
  updateProcessController,
} from "@controllers/index";
import express from "express";

const router = express.Router();

router.use(express.json());

// get all processes
router.get("/", getProcessesController);

// get process by id
router.get("/:id/", getProcessByIdController);

// get processes with params
router.post("/", getProcessesWithParamsController);

// create process
router.post("/create", createProcessController);

// update process
router.put("/:id/", updateProcessController);

// delete process
router.delete("/:id/", deleteProcessController);

export default router;
