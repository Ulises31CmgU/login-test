/* eslint-disable import/no-unresolved */
import React from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import LoadingButton from '@mui/lab/LoadingButton';

import { Grid, Typography } from '@mui/material';
import { yupUserOptions } from '../../app/yup.options';

import { CustomTextInputComponent } from '..';
import { loginRequest } from '../../app/slices/user.slice';

export function LoginFormComponent() {
  const dispatch = useDispatch();
  const requesting = useSelector((state:any) => state.user.isRequesting);

  const handleSubmit = (values: any) => {
    dispatch(loginRequest(values));
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: yupUserOptions.email,
        password: yupUserOptions.password,
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        handleSubmit(values);
        setSubmitting(false);
        resetForm();
      }}
    >
      <Form>
        <Grid container spacing={2} direction="column">
          <Grid item>
            <Typography variant="h6">
              Please login with your email and password.
            </Typography>
          </Grid>
          <Grid item>
            <CustomTextInputComponent
              label="Email"
              name="email"
              type="text"
              required
              margin="normal"
            />
          </Grid>
          <Grid item>
            <CustomTextInputComponent
              label="Password"
              name="password"
              type="password"
              required
              margin="normal"
            />
          </Grid>
          <Grid item>
            <LoadingButton
              loading={requesting}
              variant="contained"
              type="submit"
            >
              Login
            </LoadingButton>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
}

export default LoginFormComponent;
