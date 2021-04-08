import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Authentication from '@modules/Authentication/Authentication';
import allActions from '@store/actions';
import { auth } from '@firebaseConfig/index';
import { generateUserDocument } from '@firebaseConfig/index';
import Home from '@modules/Home/Home';

const Routes = () => {
  const user = useSelector(state => state.currentAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      const user = await generateUserDocument(userAuth);
      if (user) {
        dispatch(allActions.authActions.signIn(user));
      }
    });
  }, []);

  return user.login ? (
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
