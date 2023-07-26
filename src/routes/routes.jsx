import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../containers/Login';
import Register from '../containers/Register';

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
