import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import useAuth from '../../../hooks/useAuth';
import routePaths from '../../../router/routePaths';
import { IAuth } from '../../../interfaces/IAuth';

import style from './Login.module.scss';

import CustomInput from '../../shared/CustomInput';

const Login: FC = () => {
  const [login, , error] = useAuth();

  const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Please fill in the username!'),
    password: Yup.string().required('Please fill in the password!')
  });

  return (
    <Formik
      initialValues={{
        username: '',
        password: ''
      }}
      validationSchema={LoginSchema}
      onSubmit={async (values: IAuth) => {
        await login(values);
      }}>
      <Form className={style.loginWrapper}>
        <h1 className={style.mainTitle}>Welcome to Hotel Management System, please login!</h1>
        {error && <label className={style.error}>{error}</label>}
        <div className={`${error ? style.serverError : ''}`}>
          <Field name="username" label="Username" component={CustomInput} />
          <Field name="password" label="Password" type="password" component={CustomInput} />
        </div>
        <span className={style.smallText}>
          Don't have an account? Please
          <NavLink to={routePaths.register} className={style.registerLink}>
            register
          </NavLink>
        </span>
        <button className={style.loginAuthBtn} type="submit">
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default Login;
