import { QueryFailedError } from 'typeorm';
import { IAddress, AddressRepository } from '../../repositories';
import { CreationAddress } from '../../repositories/address/interfaces';
import { ErrorHandler } from '../../utils';

interface IDetail extends QueryFailedError {
  detail: string;
}

export const registerAddressService = async (validated: CreationAddress) => {
  try {
    const newAddress: IAddress = new AddressRepository().createAddress(validated);

    const savedAddress: IAddress = await new AddressRepository().saveAddress(newAddress);

    return savedAddress;
  } catch (error) {
    if (error instanceof QueryFailedError) {
      const detail = (error as IDetail).detail;

      if (detail.includes('already exists')) {
        throw new ErrorHandler(409, detail);
      }
    }
  }
};