import { useLayoutEffect } from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from './PublicRoutes';
import useAuthStore from "../stores/useAuthStore";

const Routes = () => {
  const { user, authenticate, logout } = useAuthStore()

  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      authenticate(token)
    } else {
      logout()
    }
  }, [])

  return (
    <Router>
      {user ? (
        <PrivateRoutes />
      ) : (
        <PublicRoutes />
      )}
    </Router>
  );
};

export default Routes
