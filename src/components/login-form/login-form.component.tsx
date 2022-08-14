/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import LoadingButton from '@mui/lab/LoadingButton';

import { yupUserOptions } from '../../app/yup.options';

import { CustomTextInputComponent } from '..';
import { loginRequest } from '../../app/slices/user.slice';

export function LoginFormComponent() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: any) => {
    setLoading(true);
    await dispatch(loginRequest(values));
    setLoading(false);
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
        <CustomTextInputComponent
          label="Email"
          name="email"
          type="text"
          required
        />
        <CustomTextInputComponent
          label="Password"
          name="password"
          type="password"
          required
        />
        <LoadingButton
          loading={loading}
          variant="contained"
          type="submit"
        >
          Login
        </LoadingButton>
      </Form>
    </Formik>
  );
}

export default LoginFormComponent;
