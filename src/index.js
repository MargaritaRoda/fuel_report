import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    {/*<ThemeProvider theme={theme}>*/}

    <RouterProvider router={router}/>

  </React.StrictMode>,
);
