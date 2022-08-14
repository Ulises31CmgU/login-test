import { createSelector } from '@reduxjs/toolkit';

export const selectUserList = (state: any) => state.userList;

export const selectUsersData = createSelector(
  [selectUserList],
  (userList) => userList.usersList,
);

export const selectUsersDataCount = createSelector(
  [selectUserList],
  (userList) => userList.userListSize,
);

export const selectUserlistError = createSelector(
  [selectUserList],
  (userList) => userList.errorMessage,
);
