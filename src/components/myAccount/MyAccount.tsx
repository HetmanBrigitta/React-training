import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Formik, Form, Field } from 'formik';

import useUpdateUser from '../../hooks/useUpdateUser';
import useGetRoles from '../../hooks/useRoles';
import { IUserUpdate } from '../../interfaces/IUser';
import { authSelectors } from '../../store/selectors';
import { authActions } from '../../store/reducers/authReducer';
import { userUpdateSchema } from './validationSchema';

import Navbar from '../navbar/Navbar';
import CustomInput from '../shared/CustomInput';
import CustomDatePicker from '../shared/DatePicker';
import GenderRadioBtn from '../shared/GenderRadioBtn';
import TextArea from '../shared/TextArea';

import style from './MyAccount.module.scss';

// Improvement idea: Change local state with reducer that contains all data for user
const MyAccount: FC = () => {
  const [isInEditMode, setIsInEditMode] = useState(false);
  const user = useSelector(authSelectors.getUserInfo);
  const dispatch = useDispatch();
  const history = useHistory();
  const [roles] = useGetRoles();

  const [updatedUser, setUpdatedUser] = useState<IUserUpdate>({
    birthDate: user?.birthDate || '',
    email: user?.email || '',
    gender: user?.gender || 1,
    address: user?.address || '',
    bio: user?.bio || ''
  });

  const [, error] = useUpdateUser({ ...updatedUser, id: user?.id || 0 });

  const handleOnSubmit = (values: IUserUpdate) => {
    // TODO B: How should I send this format only when the api call is made?
    // const date = new Date(values.birthDate as string);
    //
    // const submittedValues: IUserUpdate = {
    //   ...values,
    //   birthDate: new Date(date.getTime() - date.getTimezoneOffset() * 60000)
    //     .toISOString()
    //     .split('T')[0]
    // };

    setIsInEditMode(false);
    setUpdatedUser(values);
    dispatch(authActions.updateUserInfo(values));
  };

  const onBackHandler = (): void => {
    !isInEditMode && history.goBack();
  };

  return (
    <div className={style.mainWrapper}>
      <Navbar />
      <button
        type="button"
        onClick={onBackHandler}
        className={isInEditMode ? style.backDisabled : style.backBtn}>
        Back
      </button>
      <h1 className={style.mainTitle}>My Account</h1>
      <div className={`${style.accountWrapper} ${style.flex}`}>
        <div className={style.userMainInfo}>
          <img src={user?.picture} alt="User photo" />
          <p>
            {user?.firstName} {user?.lastName}
          </p>
          <p>{roles.find(() => user?.role)?.label}</p>
        </div>
        <Formik
          initialValues={updatedUser}
          validationSchema={userUpdateSchema}
          onSubmit={handleOnSubmit}
          enableReinitialize>
          <Form>
            <Field
              disabled={!isInEditMode}
              name="email"
              label="Email:"
              type="email"
              component={CustomInput}
            />
            <Field
              disabled={!isInEditMode}
              name="address"
              label="Address:"
              component={CustomInput}
            />
            <Field
              disabled={!isInEditMode}
              name="birthDate"
              label="Date of Birth:"
              component={CustomDatePicker}
            />
            <Field
              disabled={!isInEditMode}
              name="gender"
              label="Gender:"
              component={GenderRadioBtn}
            />
            <Field
              disabled={!isInEditMode}
              name="bio"
              label="Short description:"
              placeholder="Enter short description..."
              rows="5"
              component={TextArea}
            />
            {error && (
              <label className={style.error}>
                {error !== '200' ? (
                  <span className={style.error}>Form couldn't be updated!</span>
                ) : (
                  <span className={style.success}>Form was updated successfully!</span>
                )}
              </label>
            )}
            <div className={`${style.flex} ${style.accountBtnWrapper}`}>
              {isInEditMode ? (
                <button type="submit" className={style.accountMainBtn}>
                  Save
                </button>
              ) : (
                <button
                  type="button"
                  className={style.accountMainBtn}
                  onClick={() => setIsInEditMode(true)}>
                  Edit
                </button>
              )}
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default MyAccount;
