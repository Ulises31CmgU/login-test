/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isRequesting: false,
  errorMessage: '',
  token: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginRequest: {
      reducer(state) {
        state.isRequesting = true;
      },
      prepare(credentials:{email: string, password: string}) {
        return {
          payload: {
            email: credentials.email,
            password: credentials.password,
          },
        };
      },
    },
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.isRequesting = false;
      state.token = action.payload;
    },
    loginError: (state, action: PayloadAction<string>) => {
      state.isRequesting = false;
      state.errorMessage = action.payload;
    },
    logout: (state) => {
      state.token = initialState.token;
    },
  },
});

export const {
  loginRequest, loginSuccess, loginError, logout,
} = userSlice.actions;

export default userSlice.reducer;
