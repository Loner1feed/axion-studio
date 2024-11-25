import express from "express";
import {
  createProjectTypeController,
  deleteProjectTypeController,
  getProjectTypeByIdController,
  getProjectTypesController,
  getProjectTypesWithParamsController,
  updateProjectTypeController,
} from "@controllers/index";
import { validateParams, validateProjectType } from "@utils/validations";

const router = express.Router();

router.use(express.json());

// get all project types
router.get("/", getProjectTypesController);

// get project type by id
router.get("/:id/", getProjectTypeByIdController);

// get project types with params
router.post("/", [validateParams], getProjectTypesWithParamsController);

// create project type
router.post("/create", [validateProjectType], createProjectTypeController);

// update project type
router.put("/:id/", [validateProjectType], updateProjectTypeController);

// delete project type
router.delete("/:id/", deleteProjectTypeController);

export default router;
