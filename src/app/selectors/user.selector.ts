import { createSelector } from '@reduxjs/toolkit';

export const selectUser = (state: any) => state.user;

export const selectUserToken = createSelector(
  [selectUser],
  (user) => user.token,
);

export const selectIsUserLoggedIn = createSelector(
  [selectUserToken],
  (token) => !!token,
);

export const selectUserError = createSelector(
  [selectUser],
  (user) => user.errorMessage,
);
