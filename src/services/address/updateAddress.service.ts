import { IAddress, AddressRepository } from '../../repositories';
import { ErrorHandler } from '../../utils';

export const updateAddressService = async (
  params: string,
  value: string,
  body: any
) => {
  try {
    const address: IAddress = await new AddressRepository().findAddress(params, value);
    for (const [key, value] of Object.entries(body)) {
      await new AddressRepository().updateAddress(address.id, {
        [key]: value,
      });
    }
    const updateAddress: IAddress = await new AddressRepository().findAddress(
      params,
      value
    );

    return updateAddress;
  } catch {
    throw new ErrorHandler(400, 'Estimated parameter not found');
  }
};
