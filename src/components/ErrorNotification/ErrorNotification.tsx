import React, { useEffect, useState } from 'react';
import { Snackbar, SnackbarOrigin } from '@mui/material';
import { selectorErrorMessage } from '../../store/selectors/errorMessage.selector';
import { useDispatch, useSelector } from 'react-redux';
import { removeErrorMessage } from '../../store/slicers/errorMessage.slicer';

interface State extends SnackbarOrigin {
  open: boolean;
}

export const ErrorNotification = () => {
  const errorMessageSelect = useSelector(selectorErrorMessage);
  let errorMessage = '';
  if (errorMessageSelect.length) {
    errorMessage =
      errorMessageSelect[errorMessageSelect.length - 1].errorMessage;
  }

  console.log(errorMessage);
  const dispatch = useDispatch();
  const [state, setState] = useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'right',
  });
  const { vertical, horizontal, open } = state;

  useEffect(() => {
    if (errorMessageSelect.length !== 0) {
      setState((prevState) => ({ ...prevState, open: true }));
    } else {
      setState((prevState) => ({ ...prevState, open: false }));
    }
  }, [errorMessageSelect.length]);

  const handleClose = () => {
    setState({ ...state, open: false });
    dispatch(removeErrorMessage());
  };
  return (
    <Snackbar
      //autoHideDuration={5000}
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      onClose={handleClose}
      message={errorMessage}
      key={vertical + horizontal}
      //action={action}
    />
  );
};
