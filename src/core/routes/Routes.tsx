import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Authentication from '@modules/Authentication/Authentication';
import { generateUserDocument, auth } from '@firebaseConfig/index';
import { signInAction } from '@store/actions/authActions';
import MainPage from '@modules/MainPage/MainPage';

const Routes: React.FC = () => {
  const user = useSelector((state: RootStateOrAny) => state.currentAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      const user = await generateUserDocument(userAuth);
      if (user) {
        dispatch(signInAction(user));
      }
    });
  }, []);

  return user.login ? (
    <>
      <Toaster />
      <Router>
        <MainPage />
      </Router>
    </>
  ) : (
    <Router>
      <Authentication />
    </Router>
  );
};

export default Routes;
