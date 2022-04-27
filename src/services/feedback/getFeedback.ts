import { FeedbackRepository } from '../../repositories';

const getFeedbackService = async ({ user, rating, content }) => {
  let result = [];
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

  result = result.map((item) => {
    const { password, admin, ...formatedUser } = item.user;
    return { ...item, user: formatedUser };
  });
  return result;
};

export { getFeedbackService };
