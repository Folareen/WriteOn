import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const RoutesContainer  = () => {
  const isLoggedIn : boolean = false;

  return (
    <Router>
      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Navigate replace to="/dashboard" />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      )}
    </Router>
  );
};

export default RoutesContainer;
