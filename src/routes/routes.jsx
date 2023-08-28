import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  Home, Login, Products, Register, Cart, Admin,
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
        <Route
          path="/carrinho"
          element={(
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
)}
        />

        <Route
          path="/pedidos"
          element={(
            <PrivateRoute isadmin>
              <Admin />
            </PrivateRoute>
)}
        />
        <Route
          path="/listar-produtos"
          element={(
            <PrivateRoute isadmin>
              <Admin />
            </PrivateRoute>
)}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default routes;
