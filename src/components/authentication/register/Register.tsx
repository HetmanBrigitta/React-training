import React, { FC } from 'react';
import { Field, Form, Formik } from 'formik';

import useAuth from '../../../hooks/useAuth';

import CustomInput from '../../../components/shared/CustomInput';
import CustomDatePicker from '../../shared/DatePicker';
import GenderRadioBtn from '../../shared/GenderRadioBtn';
import TextArea from '../../shared/TextArea';

import { IAuth, IPasswordConfirmation, IRegister } from '../../../interfaces/IAuth';
import { registerSchema } from './validationSchema';

import style from './Register.module.scss';

type IRegisterData = IRegister & IAuth & IPasswordConfirmation;

const Register: FC = () => {
  const [, register, error] = useAuth();

  const initialValues: IRegisterData = {
    username: '',
    password: '',
    passwordConfirmation: '',
    email: '',
    firstName: '',
    lastName: '',
    birthDate: null,
    gender: 1
  };

  const handleOnSubmit = async ({ ...values }: IRegisterData) => {
    const date = new Date(values.birthDate as string);
    const formData = new FormData();

    const submittedValues = {
      ...values,
      picture: values.picture,
      birthDate: new Date(date.getTime() - date.getTimezoneOffset() * 60000)
        .toISOString()
        .split('T')[0]
    };

    Object.entries(submittedValues).forEach((value) => {
      if (value[1]) {
        formData.append(value[0], value[1].toString());
      }
    });

    await register(formData);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={handleOnSubmit}>
      <Form className={style.registerWrapper}>
        <h1 className={style.mainTitle}>Welcome, please register here!</h1>
        {error && <label className={style.error}>{error}</label>}
        <div className={`${error ? style.serverError : ''}`}>
          <Field name="username" label="Username:" component={CustomInput} />
          <Field name="password" label="Password:" type="password" component={CustomInput} />
          <Field
            name="passwordConfirmation"
            label="Confirm Password:"
            type="password"
            component={CustomInput}
          />
          <Field name="email" label="Email:" type="email" component={CustomInput} />
          <Field name="firstName" label="First Name:" component={CustomInput} />
          <Field name="lastName" label="Last Name:" component={CustomInput} />
          <Field name="birthDate" label="Date of Birth:" component={CustomDatePicker} />
          <Field name="gender" label="Gender:" component={GenderRadioBtn} />
          <Field
            name="bio"
            label="Short description:"
            placeholder="Enter short description..."
            rows="5"
            component={TextArea}
          />
          <Field name="address" label="Address:" component={CustomInput} />
          <Field
            name="picture"
            type="file"
            label="Upload profile picture:"
            component={CustomInput}
          />
        </div>
        <button type="submit" className={style.registerAuthBtn}>
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default Register;
