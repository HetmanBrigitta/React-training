import { AxiosPromise } from 'axios';
import apiPaths from './apiPaths';
import { axiosInstance } from './axiosClient';

import { IUserUpdate, IUsers } from '../interfaces/IUser';

export const userApi: {
  getUser: (activePage: number) => AxiosPromise<IUsers>;
  updateCurrentUser: (user: IUserUpdate) => AxiosPromise<void>;
} = {
  getUser: (activePage) =>
    axiosInstance.get(apiPaths.users, {
      params: {
        offset: activePage
      }
    }),
  updateCurrentUser: ({ id, ...user }) => axiosInstance.put(apiPaths.users + `/${id}`, user)
};
