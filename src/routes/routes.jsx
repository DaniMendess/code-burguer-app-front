import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Login from '../containers/Login';
import Products from '../containers/Products';
import Register from '../containers/Register';
import PrivateRoute from './privete-route';

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route
          path="/"
          element={(
            <PrivateRoute>
              <Home />
            </PrivateRoute>
)}
        />

        <Route
          path="/produtos"
          element={(
            <PrivateRoute>
              <Products />
            </PrivateRoute>
)}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default routes;
