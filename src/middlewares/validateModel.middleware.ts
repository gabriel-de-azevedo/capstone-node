import { NextFunction, Request, Response } from 'express';
import { AnySchema } from 'yup';

export const validateModelMiddleware =
  (shape: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req.body);
      const validated = await shape.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });

      req.validated = validated;

      return next();
    } catch (error) {
      return res.status(400).json({ error: error.errors[0] });
    }
  };
