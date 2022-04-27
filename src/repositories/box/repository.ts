import { getRepository, Repository } from 'typeorm';
import { BoxEntity } from '../../entities';
import { Ibox, IboxRepository } from './interface';

class BoxRepository implements IboxRepository {
  private ormRepository: Repository<BoxEntity>;

  constructor() {
    this.ormRepository = getRepository(BoxEntity);
  }

  createBox = (boxData: Ibox) => this.ormRepository.create(boxData);

  saveBox = async (boxData: Ibox) => {
    const saved = await this.ormRepository.save(boxData);
    const [filtred] = await this.findBoxByKey('id', saved.id);
    return filtred;
  };

  findBoxByKey = async (key: string, value: any) => {
    const boxFiltered = await this.ormRepository.find({
      [key]: value,
    });
    return boxFiltered;
  };
  findAllBox = async () => await this.ormRepository.find();
}

export { BoxRepository, Ibox };
