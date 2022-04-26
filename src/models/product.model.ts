import * as yup from 'yup';

export const productModel = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  boxId: yup.string().required(),
});
