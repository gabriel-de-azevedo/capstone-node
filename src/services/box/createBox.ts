import { BoxRepository, Ibox } from '../../repositories';

const createdBoxService = async (boxdata: Ibox) => {
  const boxInstance = new BoxRepository();
  const filteredBox = boxInstance.findBoxByKey('title', boxdata.title);
  if (!filteredBox[0]) {
    throw { msg: 'box already exists' };
  }
  const createBox = boxInstance.createBox(boxdata);

  const savedBox = await boxInstance.saveBox(createBox);
  return savedBox;
};

export { createdBoxService };
