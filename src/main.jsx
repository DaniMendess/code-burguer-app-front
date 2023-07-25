import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import Login from './containers/Login';
import Register from './containers/Register';
import StyleGlobal from './styles/globalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <>
      <StyleGlobal />
      <Login />
      <ToastContainer autoClose={3000} theme="light" />
    </>

  </React.StrictMode>,
);
