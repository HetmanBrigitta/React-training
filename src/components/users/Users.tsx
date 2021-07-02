import React, { FC, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { USERS_HEADER } from './constants';

import Navbar from '../navbar/Navbar';
import Pagination from '../../components/shared/Pagination';

import useUsers from '../../hooks/useUsers';

import style from './Users.module.scss';

const Users: FC = () => {
  const [activePage, setActivePage] = useState<number>(0);
  const [users, totalNumberOfPages] = useUsers(activePage);

  const onPageChange = (selectedItem: { selected: number }): void => {
    setActivePage(selectedItem.selected);
  };

  return (
    <div className={style.mainWrapper}>
      <Navbar />
      <h1 className={style.mainTitle}>User Management</h1>
      <table className={style.usersWrapper}>
        <thead className={style.headers}>
          <tr>
            {USERS_HEADER.map((label) => (
              <th className={style.headerLabels} key={uuid()}>
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={style.userList}>
          {users.length ? (
            users.map((user) => {
              return (
                <tr className={style.userRow} key={uuid()}>
                  <>
                    {Object.keys(user).map((key) => (
                      <td
                        key={uuid()}
                        className={user[`${key}`] ? style.hasContent : style.noContent}>
                        {user[`${key}`] ? user[`${key}`] : '-'}
                      </td>
                    ))}
                    <td className={style.editWrapper}>
                      <button className={style.userEditBtn}>Edit</button>
                    </td>
                    <td className={style.deleteWrapper}>
                      <button className={style.userDeleteBtn}>Delete</button>
                    </td>
                  </>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>0 items</td>
            </tr>
          )}
        </tbody>
        <tbody>
          <tr>
            <td className={`${style.usersPerPage} ${style.flex}`}>{users.length} items</td>
          </tr>
        </tbody>
      </table>
      <Pagination
        totalNumberOfPages={totalNumberOfPages}
        page={activePage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Users;
