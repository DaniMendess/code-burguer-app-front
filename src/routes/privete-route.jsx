/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Navigate } from 'react-router-dom';

import { Header } from '../components/Header';

function PrivateRoute({ children }) {
  const user = localStorage.getItem('codeburguer:userData');

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default PrivateRoute;
