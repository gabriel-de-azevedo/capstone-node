
interface IUser {
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
}

export { IUser, CreationUser, IUserRepository };
