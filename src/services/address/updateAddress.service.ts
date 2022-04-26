import {
  IAddress,
  AddressRepository,
  UserRepository,
} from '../../repositories';
import { ErrorHandler } from '../../utils';

export const updateAddressService = async (
  params: string,
  value: string,
  body: any
) => {
  try {
    const user = await new UserRepository().findUser(params, value);
    const addressId = user.address.id;

    const address: IAddress = await new AddressRepository().findAddress(
      'id',
      user.address.id
    );

    for (const [key, value] of Object.entries(body)) {
      await new AddressRepository().updateAddress(address.id, {
        [key]: value,
      });
    }

    const updateAddress: IAddress = await new AddressRepository().findAddress(
      'id',
      address.id
    );

    const savedAddress = await new AddressRepository().saveAddress(
      updateAddress
    );

    return savedAddress;
  } catch {
    throw new ErrorHandler(400, 'Estimated parameter not found');
  }
};
