import { QueryFailedError } from 'typeorm';
import {
  IAddress,
  AddressRepository,
  UserRepository,
} from '../../repositories';
import { CreationAddress } from '../../repositories/address/interfaces';
import { ErrorHandler } from '../../utils';

interface IDetail extends QueryFailedError {
  detail: string;
}

export const registerAddressService = async (
  validated: CreationAddress,
  userEmail: string
) => {
  const user = await new UserRepository().findUser('email', userEmail);
  if (user.address) {
    throw new ErrorHandler(409, 'user already has an address');
  }
  try {
    const newAddress: IAddress = new AddressRepository().createAddress(
      validated
    );

    const savedAddress: IAddress = await new AddressRepository().saveAddress(
      newAddress
    );

    user.address = savedAddress;
    new UserRepository().saveUser(user);

    return savedAddress;
  } catch (error) {
    if (error instanceof QueryFailedError) {
      const detail = (error as IDetail).detail;

      if (detail.includes('already exists')) {
        throw new ErrorHandler(409, 'address already exists');
      }
    }
  }
};
