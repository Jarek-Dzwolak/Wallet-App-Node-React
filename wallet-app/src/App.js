import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterForm from "../src/pages/RegisterForm/RegisterForm";
import Login from "../src/pages/Login/Login";
import Home from "./pages/Home/Home";
import Statistic from "../src/pages/Statstic/Statstic";
import Currencies from "../src/pages/Currencies/Currencies";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/statistic" element={<Statistic />} />
      <Route path="/currencies" element={<Currencies />} />
    </Routes>
  );
}

export default App;
