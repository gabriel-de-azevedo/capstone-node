import * as yup from 'yup';

export const addressModel = yup.object().shape({
  street: yup.string().required().typeError('street must be a string'),
  number: yup.string().required().typeError('number must be a string'),
  complement: yup.string().typeError('complement must be a string'),
  district: yup.string().required().typeError('district must be a string'),
  cep: yup
    .string()
    .matches(/^[0-9]{8}$/, 'must contain 8 numbers only')
    .required()
    .typeError('cep must be a string'),
  city: yup.string().required().typeError('city must be a string'),
  state: yup.string().required().typeError('state must be a string'),
});
