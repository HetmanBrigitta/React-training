import { AxiosPromise } from 'axios';

import apiPaths from './apiPaths';
import { axiosInstance } from './axiosClient';

import { IAuth } from '../interfaces/IAuth';

export interface IAuthReturn {
  token: string;
}

export const authApi: {
  login: (user: IAuth) => AxiosPromise<IAuthReturn>;
  register: (user: FormData) => AxiosPromise<void>;
} = {
  login: (user) => axiosInstance.post(apiPaths.auth, user),
  register: (user) => axiosInstance.post(apiPaths.register, user)
};
