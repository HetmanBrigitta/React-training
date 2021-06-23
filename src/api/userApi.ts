import { AxiosPromise } from 'axios';
import apiPaths from './apiPaths';
import { axiosInstance } from './axiosClient';

import { IUsers } from '../interfaces/IUser';

export const userApi: {
  getUser: (activePage: number) => AxiosPromise<IUsers>;
} = {
  getUser: (activePage) =>
    axiosInstance.get(apiPaths.users, {
      params: {
        offset: activePage
      }
    })
};
