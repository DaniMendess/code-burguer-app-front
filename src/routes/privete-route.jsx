/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const user = localStorage.getItem('codeburguer:userData');

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;
