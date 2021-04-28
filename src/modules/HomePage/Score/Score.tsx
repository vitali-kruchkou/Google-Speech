import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import i18n from '@i18n/index';
import { WordsObject } from '@type/types';
import {
  SetGuessedWordsActions,
  SetUnpredictableWordsActions,
} from '@store/actions/wordsActions';
const Score: React.FC = () => {
  const [score, setScore] = useState(0);
  const [word, setWord] = useState('');
  const [list, setList] = useState([]);
  const [guessedWords, setGuessedWords] = useState([]);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const getWordsFetch = useSelector(
    (state: RootStateOrAny) => state.currentWords.words,
  );

  const speechWord = useSelector(
    (state: RootStateOrAny) => state.currentWords.setWord,
  );

  const getAllWords = useSelector(
    (state: RootStateOrAny) => state.currentWords.allWords,
  );

  useEffect(() => {
    if (getAllWords) {
      setList(
        getAllWords.filter(
          (item: WordsObject) =>
            !guessedWords.some((elem: WordsObject) => elem === item),
        ),
      );
    }
  }, [getAllWords, guessedWords]);

  useEffect(() => {
    setWord(speechWord);
  }, [speechWord]);

  useEffect(() => {
    list.forEach((item: WordsObject) => {
      if (item.word === word.toLocaleLowerCase()) {
        const index = list.indexOf(item);
        setList(list.filter((i: number) => i !== index));
        setGuessedWords(quessedWords => [...quessedWords, item]);
      }
    });
  }, [word]);

  useEffect(() => {
    list.map((item: WordsObject) => {
      if (word) {
        if (item.word === word.toLocaleLowerCase()) {
          const fractionalPart = Number(getWordsFetch[0].group);
          const wholePart = 10;
          const numberOfPoints = (wholePart + fractionalPart) / wholePart;
          setScore(prevNumberOfPoints => prevNumberOfPoints + numberOfPoints);
          toast.success(`${i18n.t('Score.addScore')}`);
        }
      }
    });
  }, [word]);

  useEffect(() => {
    dispatch(SetGuessedWordsActions(guessedWords));
    dispatch(SetUnpredictableWordsActions(list));
  }, [dispatch, list, guessedWords]);

  return (
    <>
      <Toaster />
      <h1>
        {t('Score.mainTetx')}: {score}
      </h1>
    </>
  );
};

export default Score;
