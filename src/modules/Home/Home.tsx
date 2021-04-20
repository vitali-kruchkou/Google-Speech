import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { asyncSignOutAction } from '@store/actions/authActions';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const signOut = useCallback(() => {
    dispatch(asyncSignOutAction());
  }, []);

  return (
    <>
      <h1>{t('text.homeText')}</h1>
      <button onClick={signOut}>{t('signOut.buttonSignOut')}</button>
    </>
  );
};

export default Home;
