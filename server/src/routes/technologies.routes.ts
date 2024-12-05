import {
  createTechnologyController,
  deleteTechnologyController,
  getTechnologiesByIdController,
  getTechnologiesController,
  getTechnologiesWithParamsController,
  updateTechnologyController,
} from "@controllers/index";
import { validateParams, validateTechnology } from "@utils/validations";
import express from "express";

const router = express.Router();

router.use(express.json());

// get all technologies
router.get("/", getTechnologiesController);

// get technology by id
router.get("/:id/", getTechnologiesByIdController);

// get technologies with params
router.post("/", [validateParams], getTechnologiesWithParamsController);

// create technology
router.post("/create", [validateTechnology], createTechnologyController);

// update technology
router.put("/:id/", [validateTechnology], updateTechnologyController);

// delete technology
router.delete("/:id/", deleteTechnologyController);

export default router;
