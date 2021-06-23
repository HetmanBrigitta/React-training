import React, { FC } from 'react';
import { FieldProps } from 'formik';

import style from './CustomInput.module.scss';

type TProps = FieldProps & { type: string; label?: string };

const CustomInput: FC<TProps> = ({
  field: { name },
  field,
  form: { errors, touched },
  type,
  label
}) => {
  const checkError = errors && errors[name] && touched && touched[name];

  return (
    <div>
      {label && <label className={style.customLabel}>{label}</label>}
      <input {...field} type={type} className={style.customInput} />
      {checkError && <label className={style.error}>{errors[name]}</label>}
    </div>
  );
};

export default CustomInput;
