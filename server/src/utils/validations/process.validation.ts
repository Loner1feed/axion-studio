import { NextFunction, Request, Response } from "express";
import Joi, { ValidationResult } from "joi";

const ProcessSchema = Joi.object({
  title: Joi.string().required(),
  paragraph: Joi.string().required(),
  number: Joi.string().required(),
  showOnFront: Joi.boolean().required(),
});

export const validateProcess = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result: ValidationResult = ProcessSchema.validate(req.body, {
    abortEarly: true,
  });

  if (result.error)
    res.status(400).json(result.error.details.map((err) => err.message));
  else next();
};
