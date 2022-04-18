import { FeedbackEntity } from '../../entities';
import { FeedbackRepository } from '../../repositories';

const getFeedbackService = async ({ user, rating, content }) => {
  let result: FeedbackEntity[] = [];
  const feedbackRepo = new FeedbackRepository();
  result = await feedbackRepo.findAllFeedback();
  if (user) {
    result = result.filter((item) => item.user.id === user);
  }
  if (rating) {
    result = result.filter((item) => item.rating === Number(rating));
  }
  if (content) {
    result = result.filter((item) => item.content.includes(String(content)));
  }
  return result;
};

export { getFeedbackService };
