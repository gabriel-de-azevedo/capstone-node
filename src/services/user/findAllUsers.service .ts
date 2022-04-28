import { IUser, UserRepository } from '../../repositories';
import { ErrorHandler } from '../../utils';

export const findAllUserService = async () => {
  try {
    const users: IUser[] = await new UserRepository().findUsers();

    users.map((user) => {
      delete user.password;
    });

    return users;
  } catch {
    throw new ErrorHandler(404, 'no users found');
  }
};
