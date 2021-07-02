import React, { FC } from 'react';
import DatePicker from 'react-datepicker';

import { FieldProps } from 'formik';

import 'react-datepicker/dist/react-datepicker.css';
import style from './DatePicker.module.scss';

type TProps = FieldProps & { label?: string; disabled?: boolean };

const CustomDatePicker: FC<TProps> = ({
  field: { name, value },
  form: { setFieldValue, errors, touched },
  label,
  disabled = false
}) => {
  const checkError = errors && errors[name] && touched && touched[name];

  return (
    <div className={style.dateWrapper}>
      {label && (
        <label className={`${disabled && style.disabledDatePickerLabel} ${style.customLabel}`}>
          {label}
        </label>
      )}
      <DatePicker
        disabled={disabled}
        selected={value as Date}
        onChange={(date: Date) => setFieldValue(name, date)}
        dateFormat="yyyy-MM-dd"
        maxDate={new Date()}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />
      {checkError && <label className={style.error}>{errors[name]}</label>}
    </div>
  );
};

export default CustomDatePicker;
