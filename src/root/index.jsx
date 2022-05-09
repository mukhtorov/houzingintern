import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { navbar } from '../utils/navbar';

export const Root = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={'/home'} />} />

      {/* main */}
      <Route element={<Navbar />}>
        {navbar.map(({ Element, path, id }) => {
          return <Route key={id} path={path} element={Element} />;
        })}
      </Route>
    </Routes>
  );
};

export default Root;
