import { asyncSignOutAction } from '@store/actions/authActions';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import Score from './Score/Score';
import SpeechRecording from './SpeechRecording/SpeechRecording';
import WordsList from './WordsList/WordsList';

const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const signOut = useCallback(() => {
    dispatch(asyncSignOutAction());
  }, []);

  return (
    <>
      <Score />
      <button onClick={signOut}>{t('signOut.buttonSignOut')}</button>
      <WordsList />
      <SpeechRecording />
    </>
  );
};

export default MainPage;
