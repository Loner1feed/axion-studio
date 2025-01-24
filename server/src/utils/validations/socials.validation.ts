import { getValidationFn } from "@utils/helpers";
import Joi from "joi";

const SocialsSchema = Joi.object({
  title: Joi.string().required(),
  backdropColor: Joi.string().required(),
  iconName: Joi.string().required(),
  showOnFront: Joi.boolean().required(),
});

export const validateSocials = getValidationFn(SocialsSchema);
