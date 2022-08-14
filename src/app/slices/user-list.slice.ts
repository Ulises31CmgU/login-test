/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isRequesting: false,
  errorMessage: '',
  usersList: <any>[],
  userListSize: 0,
};

const userListSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    requestUsersStart: {
      reducer(state) {
        state.isRequesting = true;
      },
      prepare(usersPerPage: number, page: number) {
        return {
          payload: {
            usersPerPage,
            page,
          },
        };
      },
    },
    requestUsersSuccess: {
      reducer(state, action: PayloadAction<any>) {
        state.isRequesting = false;
        state.usersList = action.payload.userList;
        state.userListSize = action.payload.userListSize;
      },
      prepare(userList: Array<any>, userListSize: number) {
        return {
          payload: {
            userList,
            userListSize,
          },
        };
      },
    },
    requestUsersError: (state, action: PayloadAction<string>) => {
      state.isRequesting = false;
      state.errorMessage = action.payload;
    },
  },
});

export const { requestUsersStart, requestUsersSuccess, requestUsersError } = userListSlice.actions;

export default userListSlice.reducer;
