import * as yup from 'yup';

export const boxModel = yup.object().shape({
  title: yup.string().required(),
  month: yup.string().required(),
});
