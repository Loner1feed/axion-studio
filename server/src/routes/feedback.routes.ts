import {
  createFeedbackController,
  deleteFeedbackController,
  getFeedbackByIdController,
  getFeedbackController,
  getFeedbackWithParamsController,
  updateFeedbackController,
} from "@controllers/feedback.controllers";
import { validateFeedback, validateParams } from "@utils/validations";
import express from "express";

const router = express.Router();

router.use(express.json());

// get all feedback
router.get("/", getFeedbackController);

// get feedback by id
router.get("/:id/", getFeedbackByIdController);

// get feedback with params
router.post("/", [validateParams], getFeedbackWithParamsController);

// create feedback
router.post("/create", [validateFeedback], createFeedbackController);

// update feedback
router.put("/:id/", [validateFeedback], updateFeedbackController);

// delete feedback
router.delete("/:id/", deleteFeedbackController);

export default router;
