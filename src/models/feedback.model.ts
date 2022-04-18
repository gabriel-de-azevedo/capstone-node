import * as yup from 'yup';

export const feedbackModel = yup.object().shape({
  content: yup.string().required(),
  rating: yup.number().required(),
});
