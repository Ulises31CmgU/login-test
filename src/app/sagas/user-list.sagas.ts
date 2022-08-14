/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import axios from 'axios';
import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import URLS from '../../urls';
import { errorHandler } from '../utils';
import { snackbarOpen } from '../slices/snackbar.slice';
import { requestUsersError, requestUsersStart, requestUsersSuccess } from '../slices/user-list.slice';

function* getUsers(action: { payload: { usersPerPage: number, page: number }; }) {
  try {
    const { usersPerPage, page } = action.payload;
    const { data } = yield axios.get(`${URLS.GET_USER_LIST}?per_page=${usersPerPage}&&page=${page}`);
    yield put(requestUsersSuccess(data.data, parseInt(data.total, 10)));
  } catch (error: any) {
    const errorMessage = errorHandler(error);
    yield put(requestUsersError(errorMessage as string));
    yield put(snackbarOpen(errorMessage, 'error'));
  }
}

function* onUsersListRequest() {
  yield takeLatest(requestUsersStart.match, getUsers);
}

export default function* userListSagas() {
  yield all([
    call(onUsersListRequest),
  ]);
}
