/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Fab, Grid, Tooltip,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

import { requestUsersStart } from '../../app/slices/user-list.slice';
import { selectUsersData, selectUsersDataCount } from '../../app/selectors/user-list.selectors';

import { CardPreviewComponent, CustomSelectComponent, PaginationComponent } from '../../components';
import { logout } from '../../app/slices/user.slice';

function UserListPageComponent() {
  const dispatch = useDispatch();

  const userList = useSelector(selectUsersData);
  const userListCount = useSelector(selectUsersDataCount);

  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(4);
  const userDisplayOptions = [1, 2, 3, 4, 5, 6];
  const handleSelectChange = (event:any) => {
    setDataPerPage(event.target.value);
    setCurrentPage(1);
  };

  useEffect(() => {
    dispatch(requestUsersStart(dataPerPage, currentPage));
  }, [currentPage, dataPerPage]);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={3}
      my={5}
    >
      <Grid item xs={12}>
        <CardPreviewComponent data={userList} />
      </Grid>

      <Grid container item justifyContent="center">
        <Grid item>
          <CustomSelectComponent
            value={dataPerPage}
            handleChange={handleSelectChange}
            displayOptions={userDisplayOptions}
            helpText="Amount of users to display"
          />
        </Grid>
        <Grid item>
          <PaginationComponent
            totalDataCount={userListCount}
            dataCountPerPage={dataPerPage}
            handlePageChange={setCurrentPage}
            currentPage={currentPage}
          />
        </Grid>
      </Grid>
      <Grid item alignSelf="flex-end" mr={2}>
        <Tooltip title="Log out" placement="top-start" arrow>

          <Fab color="error" onClick={() => dispatch(logout())}>
            <LogoutIcon />
          </Fab>
        </Tooltip>
      </Grid>
    </Grid>
  );
}

export default UserListPageComponent;
