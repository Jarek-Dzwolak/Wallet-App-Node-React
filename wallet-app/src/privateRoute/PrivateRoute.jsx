import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component ;
};

export default PrivateRoute;