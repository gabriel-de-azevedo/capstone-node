import * as yup from 'yup';

export const adressModel = yup.object().shape({
  street: yup.string().required(),
  number: yup.string().required(),
  complement: yup.string(),
  district: yup.string().required(),
  cep: yup
    .string()
    .matches(/^[0-9]{8}$/)
    .required(),
  city: yup
    .string()
    .required(),
});
