import { NextFunction, Request, Response } from "express";
import { ObjectSchema, ValidationResult } from "joi";

export const getValidationFn = (schema: ObjectSchema) => {
  const validationFn = (req: Request, res: Response, next: NextFunction) => {
    const result: ValidationResult = schema.validate(req.body, {
      abortEarly: true,
    });

    if (result.error)
      res.status(400).json(result.error.details.map((err) => err.message));
    else next();
  };
  return validationFn;
};
