import React, { FC } from 'react';
import { FieldProps } from 'formik';

import style from './TextArea.module.scss';

interface ITextArea {
  label: string;
  placeholder: string;
  rows?: number;
}

type TProps = FieldProps & ITextArea;

const TextArea: FC<TProps> = ({ field, label, placeholder, rows }) => (
  <div>
    {label && <label className={`${style.customLabel} ${style.flex}`}>{label}</label>}
    <textarea {...field} placeholder={placeholder} rows={rows} className={style.customTextArea} />
  </div>
);

export default TextArea;
