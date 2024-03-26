import React from 'react';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { createTheme, ThemeProvider } from '@mui/material';
import { purple } from '@mui/material/colors';
import { store } from '../../store';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
  },
});
export const SystemLayout = () => {
  return (
    <>
      <Provider store={store}>
      {/*  <PersistGate loader={null} persistor={persistor}>*/}
      <ThemeProvider theme={theme}>
        <Outlet />
      </ThemeProvider>
      {/*  </PersistGate>*/}
      </Provider>
    </>
  );
};
