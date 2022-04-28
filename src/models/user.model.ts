import * as yup from 'yup';

export const userModel = yup.object().shape({
  name: yup.string().required().typeError('name must be a string'),
  lastName: yup.string().required().typeError('lastName must be a string'),
  email: yup.string().email().required().typeError('email must be a string'),
  password: yup
    .string()
    .min(6, 'password must contain at least 6 digits')
    .required()
    .typeError('password must be a string'),
  cpf: yup
    .string()
    .matches(/^[0-9]{11}$/, 'cpf must contain 11 numbers only')
    .required()
    .typeError('cpf must be a string'),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, 'number must contain 10 numbers only')
    .required()
    .typeError('phone must be a string'),
});
