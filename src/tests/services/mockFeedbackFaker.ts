import { faker } from '@faker-js/faker';
import { IFeedback } from '../../repositories';

const createMockFeedback = (work?: string): IFeedback => {
  const content = faker.datatype.string(22).concat(` ${work}`);
  const rating = faker.datatype.number({ min: 1, max: 5 });
  return { content, rating };
};

export { createMockFeedback };
