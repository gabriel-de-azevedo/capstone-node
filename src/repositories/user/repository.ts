import { getRepository, Repository } from 'typeorm';
import { UserEntity } from './../../entities/user.entity';
import { CreationUser, IUser, IUserRepository } from './interfaces';

class UserRepository implements IUserRepository {
  private ormRepository: Repository<UserEntity>;

  constructor() {
    this.ormRepository = getRepository(UserEntity);
  }
  createUser = (user: CreationUser) => this.ormRepository.create(user);
  saveUser = async (user: IUser) => this.ormRepository.save(user);
  findUser = async (key: string, value: string) =>
    await this.ormRepository.findOne({
      [key]: value,
      // relations: ['addresses'],
    });
  findUsers = async () => this.ormRepository.find();
  updateUser = async (id: string, update: { [x: string]: unknown }) =>
    await this.ormRepository.update(id, update);
}

export { UserRepository, IUser, CreationUser };
