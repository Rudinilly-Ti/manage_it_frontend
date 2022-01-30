import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SignIn from '../pages/SingIn';
import SignUp from '../pages/SignUp';

const MyRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="/register" element={<SignUp />} />
  </Routes>
);

export default MyRoutes;
