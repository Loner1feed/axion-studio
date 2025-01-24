import { getValidationFn } from "@utils/helpers";
import Joi from "joi";

const ProjectTypesSchema = Joi.object({
  title: Joi.string().required(),
  subtitle: Joi.string().required(),
  paragraph: Joi.string().required(),
  icon: Joi.string().required(),
  background: Joi.string().required(),
  order: Joi.number().required(),
  showOnFront: Joi.boolean().required(),
});

export const validateProjectType = getValidationFn(ProjectTypesSchema);
