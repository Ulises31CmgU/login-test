/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import axios from 'axios';
import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import URLS from '../../urls';
import { errorHandler } from '../utils';
import { snackbarOpen } from '../slices/snackbar.slice';
import { loginError, loginRequest, loginSuccess } from '../slices/user.slice';

function* login(action: { payload: { email: string, password: string } }) {
  try {
    const { data } = yield axios.post(`${URLS.LOGIN}`, action.payload);
    yield put(loginSuccess(data.token));
    yield put(snackbarOpen('Login succesfull', 'success'));
  } catch (error: any) {
    const errorMessage = errorHandler(error);
    yield put(loginError(errorMessage as string));
    yield put(snackbarOpen(errorMessage, 'error'));
  }
}

function* onLoginRequest() {
  yield takeLatest(loginRequest.match, login);
}

export default function* userSagas() {
  yield all([
    call(onLoginRequest),
  ]);
}
