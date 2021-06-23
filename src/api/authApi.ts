import { AxiosPromise } from 'axios';

import apiPaths from './apiPaths';
import { axiosInstance } from './axiosClient';

import { IAuth } from '../interfaces/IAuth';
import { IRoles } from '../interfaces/IRoles';

export interface IAuthReturn {
  token: string;
}

export const authApi: {
  login: (user: IAuth) => AxiosPromise<IAuthReturn>;
  register: (user: FormData) => AxiosPromise<void>;
  roles: (role: IRoles) => AxiosPromise;
} = {
  login: (user) => axiosInstance.post(apiPaths.auth, user),
  register: (user) => axiosInstance.post(apiPaths.register, user),
  roles: (role: IRoles) => axiosInstance.post(apiPaths.roles, role)
};
