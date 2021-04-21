import { asyncSignOutAction } from '@store/actions/authActions';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import SpeechRecording from './SpeechRecording/SpeechRecording';
import Words from './Words/Words';

const MainPage: React.FC = () => {
  const getWord = useSelector(
    (state: RootStateOrAny) => state.currentWords.word,
  );

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const signOut = useCallback(() => {
    dispatch(asyncSignOutAction());
  }, []);

  return (
    <>
      <h1>{t('text.homeText')}</h1>
      <button onClick={signOut}>{t('signOut.buttonSignOut')}</button>
      <Words />
      <SpeechRecording />
      {console.log(getWord)}
    </>
  );
};

export default MainPage;
