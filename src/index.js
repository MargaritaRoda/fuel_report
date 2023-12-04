import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const theme = createTheme({
//     palette: {
//         primary: {
//             main: purple[500]
//         }
//     }
//     // status: {
//     //     danger: orange[500],
//     // },
// });

root.render(
  <React.StrictMode>
    {/*<ThemeProvider theme={theme}>*/}

    <RouterProvider router={router} />

    {/*<Button variant="contained" color="secondary">Hello world</Button>*/}
    {/*    <IconButton color="primary" aria-label="add to shopping cart">*/}
    {/*        <HelpRounded />*/}
    {/*    </IconButton>*/}
    {/*<RouterProvider*/}
    {/*    router={router}*/}
    {/*    // fallbackElement={<Loader />}*/}
    {/*/>*/}
    {/*</ThemeProvider>*/}
  </React.StrictMode>,
);
