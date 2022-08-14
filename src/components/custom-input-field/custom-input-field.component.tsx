/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useField } from 'formik';
import { Alert, TextField } from '@mui/material';

function CustomTextInputComponent(props: any) {
  const [field, meta] = useField(props);

  return (
    <div>
      <TextField fullWidth error={!!(meta.touched && meta.error)} variant="standard" {...field} {...props} />
      {meta.touched && meta.error ? (
        <Alert variant="standard" severity="error">{meta.error}</Alert>
      ) : null}
    </div>
  );
}

export default CustomTextInputComponent;
