import * as yup from 'yup';

export const paymentModel = yup.object().shape({
  date: yup.date().default(() => new Date()),
  method: yup.string().required().typeError('method must be a string'),
  total: yup.number().required().typeError('total must be a number'),
  boxId: yup.string().required().typeError('boxId must be a string'),
});
