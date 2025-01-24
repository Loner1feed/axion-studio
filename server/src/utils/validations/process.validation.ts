import { getValidationFn } from "@utils/helpers";
import Joi from "joi";

const ProcessSchema = Joi.object({
  title: Joi.string().required(),
  paragraph: Joi.string().required(),
  number: Joi.string().required(),
  showOnFront: Joi.boolean().required(),
});

export const validateProcess = getValidationFn(ProcessSchema);
