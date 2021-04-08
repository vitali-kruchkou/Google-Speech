import allActions from '@store/actions';
import React from 'react';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(allActions.authActions.signout());
  };

  return (
    <>
      <h1>Home</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
};

export default Home;
