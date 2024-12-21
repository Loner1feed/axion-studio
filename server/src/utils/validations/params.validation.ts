import Joi from "joi";
import { getValidationFn } from "@utils/helpers";

export const ParamsSchema = Joi.object({
  page: Joi.number().required(),
  pageSize: Joi.number().required(),
  paramName: Joi.string().allow(""),
  paramValue: Joi.required(),
});

export const validateParams = getValidationFn(ParamsSchema);
