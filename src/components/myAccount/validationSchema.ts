import * as Yup from 'yup';

export const userUpdateSchema = Yup.object().shape({
  email: Yup.string().email('This email address is not valid!').required('This field is required!'),
  birthDate: Yup.mixed().required('This field is required!'),
  gender: Yup.number(),
  bio: Yup.string(),
  address: Yup.string()
});
