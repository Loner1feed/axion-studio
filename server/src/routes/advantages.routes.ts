import {
  createAdvantageController,
  deleteAdvantageController,
  getAdvantageByIdController,
  getAdvantagesController,
  getAdvantagesWithParamsController,
  updateAdvantageController,
} from "@controllers/index";
import { validateAdvantages, validateParams } from "@utils/validations";
import express from "express";

const router = express.Router();

router.use(express.json());

// get all advantages
router.get("/", getAdvantagesController);

// get advantage by id
router.get("/:id/", getAdvantageByIdController);

// get advantages with params
router.post("/", [validateParams], getAdvantagesWithParamsController);

// create advantage
router.post("/create", [validateAdvantages], createAdvantageController);

// update advantage
router.put("/:id/", [validateAdvantages], updateAdvantageController);

// delete advantage
router.delete("/:id/", deleteAdvantageController);

export default router;
