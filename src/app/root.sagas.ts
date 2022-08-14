/* eslint-disable import/no-unresolved */
import { all, call } from 'redux-saga/effects';
import userListSagas from './sagas/user-list.sagas';
import userSagas from './sagas/user.sagas';

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(userListSagas),
  ]);
}
