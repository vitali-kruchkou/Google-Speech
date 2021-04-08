import React, { useEffect } from 'react';
import { auth, generateUserDocument } from '../firebase/index';
import allActions from '../store/actions/index';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Authentication from '../modules/Authentication/Authentication';

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
        <h1>Home</h1>
      </Router>
    </>
  ) : (
    <Router>
      <Authentication />
    </Router>
  );
};

export default Routes;
