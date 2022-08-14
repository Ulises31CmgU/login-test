/* eslint-disable react/jsx-no-bind */
/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { selectIsSnackbarOpen, selectSnackbarMessage, selectSnackbarType } from '../../app/selectors/snackbar.selectors';
import { snackbarClose } from '../../app/slices/snackbar.slice';

function SnackbarComponent(props:any) {
  const { timeout } = props;
  const dispatch = useDispatch();

  const isSnackbarOpen = useSelector(selectIsSnackbarOpen);
  const message = useSelector(selectSnackbarMessage);
  const type = useSelector(selectSnackbarType);

  let timer: any;

  function handleClose() {
    clearTimeout(timer);
    dispatch(snackbarClose());
  }

  useEffect(() => {
    if (isSnackbarOpen) {
      timer = setTimeout(() => {
        dispatch(snackbarClose());
      }, timeout);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isSnackbarOpen, message]);

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <Snackbar
      open={isSnackbarOpen}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={timeout}
      onClose={handleClose}
    >
      <Alert severity={type} action={action} variant="filled">
        {message}
      </Alert>
    </Snackbar>
  );
}

export default SnackbarComponent;
