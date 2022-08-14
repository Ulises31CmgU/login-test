import { createSelector } from '@reduxjs/toolkit';

export const selectSnackbar = (state: any) => state.snackbar;

export const selectIsSnackbarOpen = createSelector(
  [selectSnackbar],
  (snackbar) => snackbar.isSnackbarOpen,
);

export const selectSnackbarMessage = createSelector(
  [selectSnackbar],
  (snackbar) => snackbar.message,
);

export const selectSnackbarType = createSelector(
  [selectSnackbar],
  (snackbar) => snackbar.type,
);
