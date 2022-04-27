import { faker } from '@faker-js/faker';
import { UserEntity } from '../../entities';
import { CreationUser } from '../../repositories/user/interfaces';

const createMockUser = (): CreationUser => {
  const name = faker.name.firstName().toLocaleLowerCase();
  const lastName = faker.name.lastName().toLocaleLowerCase();
  const cpf = faker.datatype.string(11);
  const phone = faker.datatype.string(10);
  const email = faker.internet.email(name, lastName).toLocaleLowerCase();
  const password = faker.datatype.string(10);

  return { name, lastName, cpf, email, password, phone };
};

const serializerMockUser = (user: UserEntity) => {
  const { password, ...formatedUser } = user;
  return formatedUser;
};

export { createMockUser, serializerMockUser };
