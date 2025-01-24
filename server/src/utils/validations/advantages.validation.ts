import Joi from "joi";
import { getValidationFn } from "@utils/helpers";

export const AdvantagesSchema = Joi.object({
  heading: Joi.string().required(),
  subheading: Joi.string().required(),
  paragraph: Joi.string().required(),
  videoUrl: Joi.string().required(),
  showOnFront: Joi.boolean().required(),
});

export const validateAdvantages = getValidationFn(AdvantagesSchema);
