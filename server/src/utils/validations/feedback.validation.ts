import Joi from "joi";
import { getValidationFn } from "@utils/helpers";

export const FeedbackSchema = Joi.object({
  name: Joi.string().required(),
  surname: Joi.string().required(),
  email: Joi.string().email().required(),
  message: Joi.string(),
  addInfo: Joi.string(),
  contacted: Joi.boolean(),
});

export const validateFeedback = getValidationFn(FeedbackSchema);
