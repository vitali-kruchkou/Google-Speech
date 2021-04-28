import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import i18n from '@i18n/index';
import { WordsObject } from '@type/types';
import {
  SetGuessedWordsActions,
  SetScoreActions,
  SetUnpredictableWordsActions,
} from '@store/actions/wordsActions';
const Score: React.FC = () => {
  const getAllQuessedWords = useSelector(
    (state: RootStateOrAny) => state.currentWords.quessedWords,
  );

  const getWordsFetch = useSelector(
    (state: RootStateOrAny) => state.currentWords.words,
  );

  const speechWord = useSelector(
    (state: RootStateOrAny) => state.currentWords.setWord,
  );

  const getAllWords = useSelector(
    (state: RootStateOrAny) => state.currentWords.allWords,
  );

  const getAllScore = useSelector(
    (state: RootStateOrAny) => state.currentWords.score,
  );

  const [score, setScore] = useState(getAllScore);
  const [word, setWord] = useState('');
  const [unpredWords, setUnpredWords] = useState([]);
  const [guessedWords, setGuessedWords] = useState([]);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    setUnpredWords(
      getAllWords.filter(
        (item: WordsObject) =>
          !getAllQuessedWords.some((elem: WordsObject) => elem === item),
      ),
    );
  }, [getAllWords, guessedWords]);

  useEffect(() => {
    setWord(speechWord);
    unpredWords.map((item: WordsObject) => {
      if (item.word === word) {
        setGuessedWords([item]);
      }
    });
  }, [speechWord, unpredWords, word]);

  useEffect(() => {
    setUnpredWords(
      unpredWords.filter((elem: WordsObject) => !guessedWords.includes(elem)),
    );
  }, [guessedWords]);

  useEffect(() => {
    unpredWords.map((item: WordsObject) => {
      if (word) {
        if (item.word === word.toLocaleLowerCase()) {
          const fractionalPart = Number(getWordsFetch[0].group);
          const wholePart = 10;
          const numberOfPoints = (wholePart + fractionalPart) / wholePart;
          setScore(
            (prevNumberOfPoints: number) => prevNumberOfPoints + numberOfPoints,
          );
          toast.success(`${i18n.t('Score.addScore')}`);
        }
      }
    });
  }, [getWordsFetch, unpredWords, word]);

  useEffect(() => {
    dispatch(SetGuessedWordsActions(guessedWords));
    dispatch(SetUnpredictableWordsActions(unpredWords));
    dispatch(SetScoreActions(score));
  }, [dispatch, unpredWords, guessedWords, score]);

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
