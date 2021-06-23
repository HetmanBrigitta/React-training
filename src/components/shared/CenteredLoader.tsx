import React, { FC } from 'react';
import Loader from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import style from './CenteredLoader.module.scss';

const CenteredLoader: FC = () => (
  <div className={style.loaderWrapper}>
    <div className={style.centerLoader}>
      <Loader type="Rings" color="#0e8488" />
    </div>
  </div>
);

export default CenteredLoader;
