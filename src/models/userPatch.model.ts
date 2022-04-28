import * as yup from 'yup';

export const userPatchModel = yup.object().shape({
  name: yup.string(),
  lastName: yup.string(),
  email: yup.string(),
  cpf: yup.string().matches(/^[0-9]{11}$/),
  phone: yup.string().matches(/^[0-9]{10}$/),
});
