import { useState } from 'react';
import { userApi } from '../api/userApi';
import { IUserUpdateRequest } from '../interfaces/IUser';
import { useUpdateEffect } from './useUpdateEffect';

interface IResponse {
  response: {
    status: string;
    message: string;
  };
}

const useUpdateUser = (user: IUserUpdateRequest): [boolean, string] => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useUpdateEffect(() => {
    setIsLoading(true);
    userApi
      .updateCurrentUser(user)
      .catch(({ response }: IResponse) => setError(response?.status))
      .finally(() => setIsLoading(false));
  }, [JSON.stringify(user)]);

  return [isLoading, error];
};

export default useUpdateUser;
