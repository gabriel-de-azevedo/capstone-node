import * as yup from 'yup';

export const feedbackModel = yup.object().shape({
  content: yup.string().required().typeError('content must be a string'),
  rating: yup.number().required().typeError('rating must be a number'),
});
