import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Authentication from '@modules/Authentication/Authentication';
import { auth } from '@firebaseConfig/index';
import { generateUserDocument } from '@firebaseConfig/index';
import Home from '@modules/Home/Home';
import { signIn } from '@store/toolkit/authSlice';

const Routes = () => {
  const login = useSelector(state => state.auth.login);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      const user = await generateUserDocument(userAuth);
      if (user) {
        dispatch(signIn(user));
      }
    });
  }, []);

  return login ? (
    <>
      <Toaster />
      <Router>
        <Home />
      </Router>
    </>
  ) : (
    <Router>
      <Authentication />
    </Router>
  );
};

export default Routes;
