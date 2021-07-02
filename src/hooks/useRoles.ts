import { useEffect, useState } from 'react';
import { rolesApi } from '../api/rolesApi';
import { IRoles } from '../interfaces/IRoles';
import { useDispatch, useSelector } from 'react-redux';
import { roleSelectors } from '../store/selectors';
import { roleActions } from '../store/reducers/roleReducer';

type TReturn = [IRoles[], boolean];

interface IResponse {
  response: {
    status: string;
    message: string;
  };
}

const useGetRoles = (): TReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const roles = useSelector(roleSelectors.getRoles);
  const dispatch = useDispatch();

  useEffect(() => {
    if (roles.length > 0) return;

    setIsLoading(true);

    rolesApi
      .getRoles()
      .then(({ data }) => dispatch(roleActions.setRoles(data.roles)))
      .catch(({ response }: IResponse) => console.error(response?.status))
      .finally(() => setIsLoading(false));
  }, []);

  return [roles, isLoading];
};

export default useGetRoles;
