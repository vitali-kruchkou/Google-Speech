import React from 'react';
import { useDispatch } from 'react-redux';
import { ActionTypes } from '@store/actions/constans.d';

const Home = () => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch({
      type: ActionTypes.ASYNC_SIGN_OUT,
    });
  };

  return (
    <>
      <h1>Home</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
};

export default Home;
