import { useState } from 'react';
import { useDispatch } from 'react-redux';
import JwtDecode from 'jwt-decode';

import { authApi } from '../api/authApi';
import { authActions } from '../store/reducers/authReducer';

import { IAuth } from '../interfaces/IAuth';
import { IUser } from '../interfaces/IUser';

type TReturn = [(values: IAuth) => Promise<void>, (values: FormData) => Promise<void>, string];

interface IErrorResponse {
  response: {
    data: {
      error: string;
    };
  };
}

const useAuth = (): TReturn => {
  const [error, setError] = useState<string>('');
  const dispatch = useDispatch();

  const handleLogin = (token: string): void => {
    localStorage.setItem('authToken', token);
    const decodedToken: IUser = JwtDecode(token);
    dispatch(authActions.setUserInfo(decodedToken));
  };

  const login = async (values: IAuth): Promise<void> => {
    setError('');

    await authApi
      .login(values)
      .then(({ data }) => handleLogin(data.token))
      .catch(({ response }: IErrorResponse) => !error && setError(response.data.error));
  };

  const register = async (values: FormData): Promise<void> => {
    const username = values.get('username');
    const password = values.get('password');

    authApi
      .register(values)
      .then(() => {
        if (username && password) {
          return login({ username: username.toString(), password: password.toString() });
        }
      })
      .catch(({ response }: IErrorResponse) => !error && setError(response.data.error));
  };

  return [login, register, error];
};

export default useAuth;
