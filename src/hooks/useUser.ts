import { useState, useEffect } from 'react';
import { userApi } from '../api/userApi';
import { IUserUpdate } from '../interfaces/IUser';

interface IResponse {
  response: {
    status: string;
  };
}

const useUser = (user: IUserUpdate): [boolean, string] => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    userApi
      .updateCurrentUser(user)
      .catch(({ response }: IResponse) => setError(response?.status))
      .finally(() => setIsLoading(false));
  }, [JSON.stringify(user)]);

  return [isLoading, error];
};

export default useUser;
