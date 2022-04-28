import * as yup from 'yup';

export const productModel = yup.object().shape({
  title: yup.string().required().typeError('title must be a string'),
  description: yup
    .string()
    .required()
    .typeError('description must be a string'),
  boxId: yup.string().required().typeError('boxId must be a string'),
});
