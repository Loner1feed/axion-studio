import { getValidationFn } from "@utils/helpers";
import Joi from "joi";

const ProjectTypesSchema = Joi.object({
  title: Joi.string().required(),
  paragraph: Joi.string().required(),
  iconName: Joi.string().required(),
  showOnFront: Joi.boolean().required(),
});

export const validateProjectType = getValidationFn(ProjectTypesSchema);
