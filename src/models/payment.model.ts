import * as yup from 'yup';

export const paymentModel = yup.object().shape({
  date: yup.date().default(() => new Date()),
  method: yup.string().required(),
  total: yup.number().required(),
  boxId: yup.string().required(),
});
