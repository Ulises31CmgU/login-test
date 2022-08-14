/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Grid } from '@mui/material';
import React from 'react';

import { LoginFormComponent } from '../../components';

function LoginPageComponent() {
  return (
    <Grid
      justifyContent="center"
      alignContent="center"
      minWidth="100px"
      mx={{
        xl: 50, lg: 40, md: 30, sm: 20, xs: 10,
      }}
      my={20}
    >
      <LoginFormComponent />
    </Grid>
  );
}
// 375px x 667px

export default LoginPageComponent;
