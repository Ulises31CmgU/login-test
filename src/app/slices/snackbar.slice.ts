/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSnackbarOpen: false,
  message: '',
  type: 'info',
};

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    snackbarOpen: {
      reducer(state, action: PayloadAction<any>) {
        state.isSnackbarOpen = true;
        state.message = action.payload.message;
        state.type = action.payload.type;
      },
      prepare(message:string, type:string) {
        return {
          payload: {
            message,
            type,
          },
        };
      },
    },
    snackbarClose: (state) => {
      state.isSnackbarOpen = false;
      state.message = '';
    },
  },
});

export const { snackbarOpen, snackbarClose } = snackbarSlice.actions;
export default snackbarSlice.reducer;
