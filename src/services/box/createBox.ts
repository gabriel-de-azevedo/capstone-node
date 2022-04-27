import { BoxRepository, Ibox } from '../../repositories';
import { ErrorHandler } from '../../utils';

const createdBoxService = async (boxdata: Ibox) => {
  const boxInstance = new BoxRepository();
  const filteredBox = await boxInstance.findBoxByKey('title', boxdata.title);
  if (filteredBox.length > 0) {
    throw new ErrorHandler(409, 'box already exists');
  }
  const createBox = boxInstance.createBox(boxdata);

  const savedBox = await boxInstance.saveBox(createBox);
  return savedBox;
};

export { createdBoxService };
