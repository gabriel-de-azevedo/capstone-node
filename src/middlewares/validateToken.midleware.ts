import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { jwtConfig } from '../configs';
import { IUser } from '../repositories';

interface IDecode {
  user: IUser;
}

export const validateTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: 'Missing authorization headers' });
  }

  const token = req.headers.authorization.split(' ')[1];

  jwt.verify(token, jwtConfig.secretKey, (err, decoded: IDecode) => {
    if (err) {
      return res.status(401).json({ error: 'Incorrect email or password' });
    }
    console.log(decoded);
    req.id = decoded.user.id;
    req.email = decoded.user.email;

    return next();
  });
};
