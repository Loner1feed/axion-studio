import { getValidationFn } from "@utils/helpers";
import Joi from "joi";

const TechnologiesSchema = Joi.object({
  title: Joi.string().required(),
  paragraph: Joi.string().required(),
  iconName: Joi.string().required(),
  href: Joi.string().required(),
  backdropColor: Joi.string().required(),
  showOnFront: Joi.boolean().required(),
});

export const validateTechnology = getValidationFn(TechnologiesSchema);
