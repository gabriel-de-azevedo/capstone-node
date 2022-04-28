import * as yup from 'yup';

export const addressPatchModel = yup.object().shape({
  street: yup.string(),
  number: yup.string(),
  complement: yup.string(),
  district: yup.string(),
  cep: yup.string().matches(/^[0-9]{8}$/),
  city: yup.string(),
  state: yup.string(),
});
