import React, { FC } from 'react';
import { FieldProps } from 'formik';

import style from './TextArea.module.scss';

interface ITextArea {
  label: string;
  placeholder: string;
  rows?: number;
  disabled?: boolean;
}

type TProps = FieldProps & ITextArea;

const TextArea: FC<TProps> = ({ field, label, placeholder, rows, disabled }) => (
  <div className={disabled ? style.disabledTextAreaWrapper : ''}>
    {label && <label className={`${style.customLabel} ${style.flex}`}>{label}</label>}
    <textarea
      {...field}
      disabled={disabled}
      placeholder={placeholder}
      rows={rows}
      className={disabled ? style.disabledTextArea : style.customTextArea}
    />
  </div>
);

export default TextArea;
