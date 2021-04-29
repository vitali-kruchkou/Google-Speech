import React, { MouseEvent, useCallback, useEffect, useState } from 'react';
import Score from '../Score/Score';
import { useTranslation } from 'react-i18next';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import WordsList from '../WordsList/WordsList';
import SpeechRecording from '../SpeechRecording/SpeechRecording';
import { useHistory } from 'react-router-dom';
import { asyncSignOutAction } from '@store/actions/authActions';
import { database } from '@firebaseConfig/index';
import { ClearWordsActions } from '@store/actions/wordsActions';
import Style from './StyledMainPage';
import { Button } from 'antd';

const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const user = useSelector((state: RootStateOrAny) => state.currentAuth.user);
  const startScore = 0;
  const [dbScore, setDbScore] = useState<number>(startScore);

  const getAllScore = useSelector(
    (state: RootStateOrAny) => state.currentWords.score,
  );

  useEffect(() => {
    database
      .ref()
      .child('users')
      .child(`${user.uid}`)
      .on('value', snapshot => {
        if (snapshot.val().score === undefined) {
          setDbScore(Number(startScore));
        }
        if (snapshot.val().score !== undefined) {
          setDbScore(snapshot.val().score);
        }
      });
  }, [user]);

  const signOut = useCallback(() => {
    dispatch(asyncSignOutAction());
    dispatch(ClearWordsActions());
  }, [dispatch]);

  const history = useHistory();

  const handleResultsButton = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      history.push('/ShortTermStatistics');
      const now = new Date().toLocaleString();
      database
        .ref()
        .child('users')
        .child(`${user.uid}`)
        .child('score')
        .set(getAllScore + dbScore);
      database.ref().child('users').child(`${user.uid}`).child('date').set(now);
    },
    [dbScore, getAllScore, history, user.uid],
  );

  return (
    <>
      <Button onClick={signOut}>{t('signOut.buttonSignOut')}</Button>
      <Score />
      <WordsList />
      <Style.Buttons>
        <SpeechRecording />
        <Button type="primary" onClick={handleResultsButton}>
          Results
        </Button>
      </Style.Buttons>
    </>
  );
};

export default MainPage;
