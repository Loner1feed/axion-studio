import Joi, { ValidationError, ValidationResult } from "joi";
import { NextFunction, Request, Response } from "express";

export const AdvantagesSchema = Joi.object({
  heading: Joi.string().required(),
  subheading: Joi.string().required(),
  paragraph: Joi.string().required(),
  videoUrl: Joi.string().required(),
});

export const validateAdvantages = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result: ValidationResult = AdvantagesSchema.validate(req.body, {
    abortEarly: true,
  });

  if (result.error)
    res.status(400).json(result.error.details.map((err) => err.message));
  else next();
};
