import {
  getFaqByIdController,
  getFaqController,
  getFaqWithParamsController,
  createFaqController,
  deleteFaqController,
  updateFaqController,
} from "@controllers/index";
import { validateFaq, validateParams } from "@utils/validations";
import express from "express";

const router = express.Router();

router.use(express.json());

// get all faqs
router.get("/", getFaqController);

// get faq by id
router.get("/:id/", getFaqByIdController);

// get faqs with params
router.post("/", [validateParams], getFaqWithParamsController);

// create faq
router.post("/create", [validateFaq], createFaqController);

// update faq
router.put("/:id/", [validateFaq], updateFaqController);

// delete faq
router.delete("/:id/", deleteFaqController);

export default router;
