import { UpdateResult } from 'typeorm';

interface IUser {
  admin: any;
  id: string;
  name: string;
  lastName: string;
  cpf: string;
  email: string;
  password: string;
}

interface CreationUser {
  name: string;
  lastName: string;
  cpf: string;
  email: string;
  password: string;
}

interface IUserRepository {
  createUser: (user: CreationUser) => IUser;
  saveUser: (user: IUser) => Promise<IUser>;
  findUser: (key: string, value: string) => Promise<IUser>;
  findUsers: () => Promise<IUser[]>;
  updateUser: (
    id: string,
    update: { [x: string]: unknown }
  ) => Promise<UpdateResult>;
}

export { IUser, CreationUser, IUserRepository };
