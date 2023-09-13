import { useLayoutEffect } from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from './PublicRoutes';
import useAuthStore from "../stores/useAuthStore";
import jwtDecode from "jwt-decode";
import { setAxiosToken } from "../api/axios";

const Routes = () => {
  const { user, authenticate } = useAuthStore()

  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const user = jwtDecode(token)
      if (user) {
        setAxiosToken(token)
        authenticate(user)
      }
    } else {
      authenticate(null)
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
