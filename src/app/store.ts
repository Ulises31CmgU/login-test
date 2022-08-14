/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import userReducer from './slices/user.slice';
import userListReducer from './slices/user-list.slice';
import snackbarReducer from './slices/snackbar.slice';
import rootSaga from './root.sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const rootReducer = combineReducers({
  user: userReducer,
  userList: userListReducer,
  snackbar: snackbarReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [...middlewares],
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
