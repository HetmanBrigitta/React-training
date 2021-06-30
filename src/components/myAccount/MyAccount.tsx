import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';

import { userUpdateSchema } from './validationSchema';

import CustomInput from '../shared/CustomInput';
import CustomDatePicker from '../shared/DatePicker';
import GenderRadioBtn from '../shared/GenderRadioBtn';
import TextArea from '../shared/TextArea';

import style from './MyAccount.module.scss';
import routePaths from '../../router/routePaths';
import { authSelectors } from '../../store/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import useUser from '../../hooks/useUser';
import { IUserUpdate, IUserUpdateInitialValues } from '../../interfaces/IUser';
import { authActions } from '../../store/reducers/authReducer';

// local state is a bad practice when you have a complicated form
// with complicated form you should create a reducer
// TODO B: Change local state with reducer that contains all data for user
const MyAccount: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector(authSelectors.getUserInfo);
  const dispatch = useDispatch();

  const [updatedUser, setUpdatedUser] = useState<IUserUpdate | undefined>();
  useUser(updatedUser!);

  // initialValues should be based on user from the store
  const initialValues: IUserUpdateInitialValues = {
    birthDate: user?.birthDate,
    email: user?.email,
    address: user?.address,
    gender: user?.gender,
    bio: user?.bio
  };

  const handleOnSubmit = (values: any) => {
    setIsOpen(false);
    // setUpdatedUser with formated data
    setUpdatedUser(values);
    // where the values should be formated
    dispatch(authActions.setUserInfo(values));
  };

  return (
    <div className={style.flex}>
      <div>fistname,lastname,role,picture
        <img src={user?.picture}></img>
        <p>{user?.firstName}</p>
        <p>{user?.lastName}</p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={userUpdateSchema}
        onSubmit={handleOnSubmit}>
        <Form className={style.accountWrapper}>
          <Field name="email" label="Email:" type="email" component={CustomInput} />
          <Field name="address" label="Address:" component={CustomInput} />
          <Field name="birthDate" label="Date of Birth:" component={CustomDatePicker} />
          <Field name="gender" label="Gender:" component={GenderRadioBtn} />
          <Field
            name="bio"
            label="Short description:"
            placeholder="Enter short description..."
            rows="5"
            component={TextArea}
          />
          <div className={`${style.flex} ${style.accountBtnWrapper}`}>
            <div className={`${style.flex} ${style.accountBtnWrapper}`}>
              {isOpen ? (
                <button type="submit">Save</button>
              ) : (
                <button type="button" onClick={() => setIsOpen(true)}>
                  Edit
                </button>
              )}
            </div>
            <NavLink to={routePaths.users}>Back</NavLink>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default MyAccount;
