import { AxiosPromise } from 'axios';
import { axiosInstance } from './axiosClient';
import apiPaths from './apiPaths';

import { IRoleState } from '../interfaces/IRoles';

export const rolesApi: {
  getRoles: () => AxiosPromise<IRoleState>;
} = {
  getRoles: () => axiosInstance.get(apiPaths.roles)
};
