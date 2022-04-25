import { IUser, UserRepository } from '../../repositories';
import { ErrorHandler } from '../../utils';

export const findAllUserService = async () => {
  try {
    const users: IUser[] = await new UserRepository().findUsers();

    users.map((user) => {
      delete user.admin;
      delete user.password;
    });

    return users;
  } catch {
    throw new ErrorHandler(400, 'Estimated parameter not found');
  }
};
