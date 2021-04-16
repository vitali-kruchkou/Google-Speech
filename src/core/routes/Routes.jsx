import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Authentication from '@modules/Authentication/Authentication';
import Home from '@modules/Home/Home';
import { generateUserDocument, auth } from '@firebaseConfig/';
import { ActionTypes } from '@store/actions/constans.d';

const Routes = () => {
  const user = useSelector(state => state.currentAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      const user = await generateUserDocument(userAuth);
      if (user) {
        dispatch({
          type: ActionTypes.SIGN_IN,
          payload: user,
        });
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
