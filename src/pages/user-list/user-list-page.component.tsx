/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies

import { requestUsersStart } from '../../app/slices/user-list.slice';
import { selectUsersData, selectUsersDataCount } from '../../app/selectors/user-list.selectors';

import { CardPreviewComponent, PaginationComponent } from '../../components';
import { logout } from '../../app/slices/user.slice';

function UserListPageComponent() {
  const dispatch = useDispatch();

  const userList = useSelector(selectUsersData);
  const userListCount = useSelector(selectUsersDataCount);

  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(6);

  useEffect(() => {
    dispatch(requestUsersStart(dataPerPage, currentPage));
  }, [currentPage, dataPerPage]);

  return (
    <Suspense>

      <div>
        <select
          value={dataPerPage}
          onChange={(event) => (setDataPerPage(parseInt(event.target.value, 10)))}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
        </select>
        <button type="button" onClick={() => dispatch(logout())}>
          log out
        </button>
        <CardPreviewComponent data={userList} />
        <PaginationComponent
          totalDataCount={userListCount}
          dataCountPerPage={dataPerPage}
          handlePageChange={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </Suspense>
  );
}

export default UserListPageComponent;
