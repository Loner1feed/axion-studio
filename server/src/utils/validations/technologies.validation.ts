import { NextFunction, Request, Response } from "express";
import Joi, { ValidationResult } from "joi";

const TechnologiesSchema = Joi.object({
  title: Joi.string().required(),
  paragraph: Joi.string().required(),
  iconName: Joi.string().required(),
  href: Joi.string().required(),
  backdropColor: Joi.string().required(),
  showOnFront: Joi.boolean().required(),
});

export const validateTechnology = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result: ValidationResult = TechnologiesSchema.validate(req.body, {
    abortEarly: true,
  });

  if (result.error)
    res.status(400).json(result.error.details.map((err) => err.message));
  else next();
};
