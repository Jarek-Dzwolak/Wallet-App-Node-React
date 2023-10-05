import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RegisterForm from '../src/pages/RegisterForm/RegisterForm';
import Login from '../src/pages/Login/Login';
import Home from './pages/Home/Home';
import Statistic from '../src/pages/Statistic/Statistic';
import Currencies from '../src/pages/Currencies/Currencies';
import PrivateRoute from '../src/privateRoute/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={<PrivateRoute redirectTo="/login" component={<Home />} />}
      />
      <Route
        path="/statistic"
        element={<PrivateRoute redirectTo="/login" component={<Statistic />} />}
      />
      <Route
        path="/currencies"
        element={
          <PrivateRoute redirectTo="/login" component={<Currencies />} />
        }
      />
    </Routes>
  );
}

export default App;
