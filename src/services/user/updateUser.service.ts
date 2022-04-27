import { UserRepository } from '../../repositories';
import { ErrorHandler } from '../../utils';

export const updateUserService = async (id: string, body: any) => {
  try {
    for (const [key, value] of Object.entries(body)) {
      await new UserRepository().updateUser(id, {
        [key]: value,
      });
    }

    const user = await new UserRepository().findUser('id', id);

    delete user.password;

    return user;
  } catch {
    throw new ErrorHandler(400, 'Estimated parameter not found');
  }
};
