import {
  createSocialController,
  deleteSocialController,
  getSocialByIdController,
  getSocialsController,
  getSocialsWithParamsController,
  updateSocialController,
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
router.post("/create", [validateSocials], createSocialController);

// update social
router.put("/:id/", [validateSocials], updateSocialController);

// delete social
router.delete("/:id/", deleteSocialController);

export default router;
