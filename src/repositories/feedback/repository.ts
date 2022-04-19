import { getRepository, Repository } from 'typeorm';
import { FeedbackEntity } from '../../entities';
import { IFeedback, IFeedbackRepository } from './interfaces';

class FeedbackRepository implements IFeedbackRepository {
  private ormRepository: Repository<FeedbackEntity>;

  constructor() {
    this.ormRepository = getRepository(FeedbackEntity);
  }
  createFeedback = (feedback: IFeedback) => this.ormRepository.create(feedback);

  saveFeedback = async (feedback: IFeedback) => {
    const saved = await this.ormRepository.save(feedback);
    const [filtred] = await this.findFeedbackByKey('id', saved.id);
    return filtred;
  };

  findFeedbackByKey = async (key: string, value: any) => {
    const filtredFeedback = await this.ormRepository.find({
      [key]: value,
    });
    return filtredFeedback;
  };
  findAllFeedback = async () => {
    const allFeedback = await this.ormRepository.find({
      relations: ['user'],
    });
    return allFeedback;
  };
}

export { FeedbackRepository, IFeedback };
