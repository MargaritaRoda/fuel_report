import React from 'react';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { purple } from '@mui/material/colors';
import { persistor, store } from '../../store';
import { PersistGate } from 'redux-persist/integration/react';

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
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Outlet />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
};
