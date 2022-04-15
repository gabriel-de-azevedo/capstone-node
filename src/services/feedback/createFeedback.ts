import {
  FeedbackRepository,
  IFeedback,
  UserRepository,
} from '../../repositories';

const createFeedback = async (email: string, feedback: IFeedback) => {
  const feedbackInstance = new FeedbackRepository();
  const user = await new UserRepository().findUser('email', email);
  const newFeedback = feedbackInstance.createFeedback(feedback);
  newFeedback.user = user;
  const savedFeedback = await feedbackInstance.saveFeedback(newFeedback);

  const { password, address, ...formatedUser } = user;
  return { ...savedFeedback, user: { ...formatedUser } };
};

export { createFeedback };
