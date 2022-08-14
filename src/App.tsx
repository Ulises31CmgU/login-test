/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import { selectIsUserLoggedIn } from './app/selectors/user.selector';
import { SnackbarComponent, SpinnerComponent } from './components';

const LoginPageComponent = lazy(
  () => import('./pages/login/login-page.component'),
);
const UserListPageComponent = lazy(
  () => import('./pages/user-list/user-list-page.component'),
);

// eslint-disable-next-line id-length
function App() {
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  return (
    <div className="App">
      <Suspense fallback={<SpinnerComponent />}>
        <SnackbarComponent timeout={3000} />
        <Routes>
          <Route
            path="/login"
            element={
              isUserLoggedIn
                ? (<Navigate to="/users" replace />)
                : (<LoginPageComponent />)
          }
          />
          <Route
            path="/users"
            element={
              !isUserLoggedIn
                ? (<Navigate to="/login" replace />)
                : (<UserListPageComponent />)
          }
          />

          <Route path="/*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
