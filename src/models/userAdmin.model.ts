import * as yup from 'yup';

export const userAdminModel = yup.object().shape({
  admin: yup.boolean().required(),
  key: yup.string(),
});
