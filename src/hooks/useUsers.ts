import { useEffect, useState } from 'react';
import { userApi } from '../api/userApi';
import useGetRoles from './useRoles';

import { IKeyObject } from '../interfaces/IUser';

type TReturn = [IKeyObject[], number, boolean];

const useUsers = (activePage: number): TReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<IKeyObject[]>([]);
  const [totalNumberOfPages, setTotalNumberOfPages] = useState<number>(0);
  const [roles] = useGetRoles();

  const getUsers = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const { data } = await userApi.getUser(activePage);

      if (data.total) {
        setTotalNumberOfPages(Math.floor(data.total / 10) + (data.total % 10 === 0 ? 0 : 1));
      }

      const copy = data?.users?.map(
        ({ firstName, lastName, email, role, birthDate, createdAt }) => ({
          firstName,
          lastName,
          role: roles[role]?.label,
          email,
          birthDate,
          createdAt
        })
      );

      setUsers(copy);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, [activePage, roles]);

  return [users, totalNumberOfPages, isLoading];
};

export default useUsers;
