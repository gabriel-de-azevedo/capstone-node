import * as yup from 'yup';

export const userAdminModel = yup.object().shape({
  admin: yup.boolean().required().typeError('admin can only be true or false'),
  key: yup.string().typeError('key must be a string'),
});
