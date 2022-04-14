import { NextFunction, Request, Response } from 'express';

export const validateAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { key } = req.body;
    if (key === 'administration') {
      return next();
    }
    return res.status(401).json({ error: 'not authorized' });
  } catch (error) {
    return res.status(400).json({ error: error.errors[0] });
  }
};
