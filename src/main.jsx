import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import { UserProvider } from './hooks/UserContext';
import Routes from './routes/routes';
import StyleGlobal from './styles/globalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <>
      <StyleGlobal />
      <UserProvider>
        <Routes />
      </UserProvider>

      <ToastContainer autoClose={3000} theme="light" />
    </>

  </React.StrictMode>,
);
