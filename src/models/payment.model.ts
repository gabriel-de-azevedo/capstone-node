import * as yup from 'yup';

export const paymentModel = yup.object().shape({
  date: yup.string().required(),
  method: yup.string().required(),
  total: yup.number().required(),
});
