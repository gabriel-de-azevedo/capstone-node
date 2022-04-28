import * as yup from 'yup';

export const boxModel = yup.object().shape({
  title: yup.string().required().typeError('title must be a string'),
  month: yup.string().required().typeError('month must be a string'),
});
