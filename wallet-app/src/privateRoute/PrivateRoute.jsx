import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const isLoggedIn = localStorage.getItem('accessToken');

  return isLoggedIn ? <Outlet /> : <Navigate to={'/login'} />;
};

export default PrivateRoute;
