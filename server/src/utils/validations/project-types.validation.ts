import { NextFunction, Request, Response } from "express";
import Joi, { ValidationResult } from "joi";

const ProjectTypesSchema = Joi.object({
  title: Joi.string().required(),
  paragraph: Joi.string().required(),
  iconName: Joi.string().required(),
  showOnFront: Joi.boolean().required(),
});

export const validateProjectType = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result: ValidationResult = ProjectTypesSchema.validate(req.body, {
    abortEarly: true,
  });

  if (result.error)
    res.status(400).json(result.error.details.map((err) => err.message));
  else next();
};
