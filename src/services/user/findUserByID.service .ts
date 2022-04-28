import { IUser, UserRepository } from '../../repositories';
import { ErrorHandler } from '../../utils';

export const findUserByIDService = async (params: string, value: string) => {
  try {
    const user: IUser = await new UserRepository().findUser(params, value);

    delete user.admin;
    delete user.password;

    return user;
  } catch {
    throw new ErrorHandler(404, 'user not found');
  }
};
