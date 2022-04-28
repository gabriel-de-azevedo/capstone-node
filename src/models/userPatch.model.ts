import * as yup from 'yup';

export const userPatchModel = yup.object().shape({
  name: yup.string().typeError('name must be a string'),
  lastName: yup.string().typeError('lastName must be a string'),
  email: yup.string().email().typeError('email must be a string'),
  password: yup
    .string()
    .min(6, 'password must contain at least 6 digits')
    .typeError('password must be a string'),
  cpf: yup
    .string()
    .matches(/^[0-9]{11}$/, 'cpf must contain 11 numbers only')
    .typeError('cpf must be a string'),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, 'number must contain 10 numbers only')
    .typeError('phone must be a string'),
});
