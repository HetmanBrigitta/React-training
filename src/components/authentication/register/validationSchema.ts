import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  username: Yup.string().required('This field is required!'),
  password: Yup.string()
    .min(8, 'Password is too short! Should be 8 chars minimum!')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Password must contain one uppercase, one lowercase, one Number and one special case character!'
    )
    .required('This field is required!'),
  passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match!'),
  email: Yup.string().email('This email address is not valid!').required('This field is required!'),
  firstName: Yup.string()
    .matches(/^[A-Za-z ][^-\s]*$/, 'First name is not valid!')
    .required('This field is required!'),
  lastName: Yup.string()
    .matches(/^[A-Za-z ][^-\s]*$/, 'Last name is not valid!')
    .required('This field is required!'),
  birthDate: Yup.mixed().required('This field is required!'),
  gender: Yup.number(),
  bio: Yup.string(),
  address: Yup.string(),
  picture: Yup.string()
});
