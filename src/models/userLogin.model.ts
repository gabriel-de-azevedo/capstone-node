import * as yup from 'yup';

export const userLoginModel = yup.object().shape({
  email: yup.string().required().typeError('email must be a string'),
  password: yup.string().required().typeError('password must be a string'),
});
