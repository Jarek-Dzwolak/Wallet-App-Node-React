import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterForm from "../src/pages/RegisterForm/RegisterForm";
import Login from "../src/pages/Login/Login";
import Dashboard from "../src/pages/DashBoard/DashBoard";
import Statistic from "../src/pages/Statstic/Statstic";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/statistic" element={<Statistic />} />
    </Routes>
  );
}

export default App;
