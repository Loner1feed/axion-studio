import { getValidationFn } from "@utils/helpers";
import Joi from "joi";

export const FaqSchema = Joi.object({
  question: Joi.string().required(),
  answer: Joi.string().required(),
  showOnFront: Joi.boolean().required(),
  order: Joi.number().required(),
});

export const validateFaq = getValidationFn(FaqSchema);
