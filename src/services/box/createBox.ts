import { BoxRepository, Ibox } from '../../repositories';

const createdBoxService = async (boxdata: Ibox) => {
  const boxInstance = new BoxRepository();

  const createBox = boxInstance.createBox(boxdata);

  const savedBox = await boxInstance.saveBox(createBox);
  return savedBox;
};

export { createdBoxService };
