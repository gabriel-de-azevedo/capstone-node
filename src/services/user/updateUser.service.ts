import { IUser, UserRepository } from '../../repositories';
import { ErrorHandler } from '../../utils';

export const updateUserService = async (email: string, body: any) => {
  try {
    const user: IUser = await new UserRepository().findUser('email', email);
    for (const [key, value] of Object.entries(body)) {
      await new UserRepository().updateUser(user.id, {
        [key]: value,
      });
    }
    const updateUser: IUser = await new UserRepository().findUser(
      'email',
      email
    );

    delete updateUser.password;

    return updateUser;
  } catch {
    throw new ErrorHandler(400, 'Estimated parameter not found');
  }
};
