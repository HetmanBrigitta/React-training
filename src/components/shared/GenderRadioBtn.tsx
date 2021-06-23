import React, { FC } from 'react';
import { FieldProps } from 'formik';

import style from './GenderRadioBtn.module.scss';

export interface IGender {
  value: 1 | 2;
}

type TProps = IGender & FieldProps & { label?: string };

const GenderRadioBtn: FC<TProps> = ({ form: { setFieldValue }, field: { name, value }, label }) => (
  <div className={style.flex}>
    {label && <label className={style.customLabel}>{label}</label>}
    <div className={style.radioBtn}>
      <input type="radio" checked={value === 1} onChange={() => setFieldValue(name, 1)} />
      <label>Male</label>
    </div>
    <div className={style.radioBtn}>
      <input type="radio" checked={value === 2} onChange={() => setFieldValue(name, 2)} />
      <label>Female</label>
    </div>
  </div>
);

export default GenderRadioBtn;
