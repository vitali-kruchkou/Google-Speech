import React, { MouseEvent, useCallback } from 'react';
import Score from '../Score/Score';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import WordsList from '../WordsList/WordsList';
import SpeechRecording from '../SpeechRecording/SpeechRecording';
import { useHistory } from 'react-router-dom';
import { asyncSignOutAction } from '@store/actions/authActions';

const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const signOut = useCallback(() => {
    dispatch(asyncSignOutAction());
  }, [dispatch]);

  const history = useHistory();

  const handleResultsButton = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      history.push('/ShortTermStatistics');
    },
    [history],
  );

  return (
    <>
      <button onClick={signOut}>{t('signOut.buttonSignOut')}</button>
      <Score />
      <WordsList />
      <SpeechRecording />
      <button onClick={handleResultsButton}>Results</button>
    </>
  );
};

export default MainPage;
