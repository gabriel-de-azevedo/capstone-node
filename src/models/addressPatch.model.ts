import * as yup from 'yup';

export const addressPatchModel = yup.object().shape({
  street: yup.string().typeError('street must be a string'),
  number: yup.string().typeError('number must be a string'),
  complement: yup.string().typeError('complement must be a string'),
  district: yup.string().typeError('district must be a string'),
  cep: yup
    .string()
    .matches(/^[0-9]{8}$/, 'must contain 8 numbers only')
    .typeError('cep must be a string'),
  city: yup.string().typeError('city must be a string'),
  state: yup.string().typeError('state must be a string'),
});
