import { IUser, UserRepository } from '../../repositories';
import { ErrorHandler } from '../../utils';

export const findUserByIDService = async (params: string, value: string) => {
  try {
    const user: IUser = await new UserRepository().findUser(params, value);
    return user;
  } catch {
    throw new ErrorHandler(400, 'Estimated parameter not found');
  }
};
