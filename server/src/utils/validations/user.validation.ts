import Joi from "joi";
import { getValidationFn } from "@utils/helpers";

const UserSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

export const validateUser = getValidationFn(UserSchema);
