/* eslint-disable */
import axios from 'axios';

const baseURL: string = process.env.REACT_APP_BASE_URL || '';

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow_Origin': '*'
  },
  timeout: 300000
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');

  config.headers = Object.assign(
    {
      'X-Auth-Token': token
    },
    config.headers
  );

  return config;
});
