import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Authentication from '../modules/Authentication/Authentication';

const Routes = () => {
  return user ? (
    <Router>
      <h1>Home</h1>
    </Router>
  ) : (
    <Router>
      <Authentication />
    </Router>
  );
};

export default Routes;
