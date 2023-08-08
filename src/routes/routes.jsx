import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  Home, Login, Products, Register,
} from '../containers/index';
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
