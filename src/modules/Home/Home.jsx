import React from 'react';
import { useDispatch } from 'react-redux';
import { signError, signOut } from '@store/toolkit/authSlice';
import { SignOut } from '@firebaseConfig/firebaseAuthQueries';

const Home = () => {
  const dispatch = useDispatch();

  const signOUT = async () => {
    try {
      await SignOut().then(() => {
        dispatch(signOut());
      });
    } catch (error) {
      dispatch(signError());
    }
  };

  return (
    <>
      <h1>Home</h1>
      <button onClick={signOUT}>Sign out</button>
    </>
  );
};

export default Home;
