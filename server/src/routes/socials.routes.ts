import {
  createProcessController,
  deleteSocialController,
  getSocialByIdController,
  getSocialsController,
  getSocialsWithParamsController,
  updateProcessController,
} from "@controllers/index";
import { validateParams, validateSocials } from "@utils/validations";
import express from "express";

const router = express.Router();

router.use(express.json());

// get all socials
router.get("/", getSocialsController);

// get social by id
router.get("/:id/", getSocialByIdController);

// get socials with params
router.post("/", [validateParams], getSocialsWithParamsController);

// create social
router.post("/create", [validateSocials], createProcessController);

// update social
router.post("/:id/", [validateSocials], updateProcessController);

// delete social
router.delete("/:id/", deleteSocialController);

export default router;
