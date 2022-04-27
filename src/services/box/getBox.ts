import { BoxEntity } from '../../entities';
import { BoxRepository } from '../../repositories';

const getBoxService = async ({ id }) => {
  let result: BoxEntity[] = [];
  const boxRepo = new BoxRepository();
  result = await boxRepo.findAllBox();
  if (id) {
    result = result.filter((box) => box.id === id);
  }
  return result;
};

export { getBoxService };
