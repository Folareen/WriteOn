import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from './PublicRoutes';

const Routes = () => {
  const isLoggedIn: boolean = false;

  return (
    <Router>
      {isLoggedIn ? (
        <PrivateRoutes />
      ) : (
        <PublicRoutes />
      )}
    </Router>
  );
};

export default Routes
