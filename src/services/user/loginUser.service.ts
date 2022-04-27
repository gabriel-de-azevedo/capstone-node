import bcrypt from 'bcryptjs';
import JsonWebToken from 'jsonwebtoken';
import { jwtConfig } from '../../configs';
import { UserRepository } from '../../repositories';
import { ErrorHandler } from '../../utils';

export const loginUserService = async (email: string, password: string) => {
  const user = await new UserRepository().findUser('email', email);

  if (!user) {
    throw new ErrorHandler(401, 'Wrong email/password');
  }

  if (user) {
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw new ErrorHandler(401, 'Wrong email/password');
    }

    delete user.address;

    const token = JsonWebToken.sign({ user }, jwtConfig.secretKey, {
      expiresIn: jwtConfig.expiresIn,
    });

    return token;
  }
};
