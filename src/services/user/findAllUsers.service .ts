import { IUser, UserRepository } from '../../repositories';
import { ErrorHandler } from '../../utils';

export const findAllUserService = async () => {
  try {
    const users: IUser[] = await new UserRepository().findUsers();
    return users;
  } catch {
    throw new ErrorHandler(400, 'Estimated parameter not found');
  }
};
