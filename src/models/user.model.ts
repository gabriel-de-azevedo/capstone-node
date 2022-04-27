import * as yup from 'yup';

export const userModel = yup.object().shape({
  name: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().min(6).required(),
  cpf: yup
    .string()
    .matches(/^[0-9]{11}$/)
    .required(),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/)
    .required(),
  admin: yup.boolean(),
});
