import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RootStateOrAny, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import i18n from '@i18n/index';

const Score: React.FC = () => {
  const [score, setScore] = useState(0);
  const [word, setWord] = useState('');
  const [list, setList] = useState([]);
  const { t } = useTranslation();

  const getWordsFetch = useSelector(
    (state: RootStateOrAny) => state.currentWords.words,
  );

  const speechWord = useSelector(
    (state: RootStateOrAny) => state.currentWords.setWord,
  );

  useEffect(() => {
    if (getWordsFetch) {
      setList(getWordsFetch.map((res: Record<string, unknown>) => res.word));
    }
  }, [getWordsFetch]);

  useEffect(() => {
    setWord(speechWord);
    if (word) {
      const index = list.indexOf(word);
      setList(list.filter((item: string, i: number) => i !== index));
    }
  }, [speechWord, word]);

  useEffect(() => {
    if (getWordsFetch) {
      if (list.includes(word)) {
        const fractionalPart = Number(getWordsFetch[0].group);
        const wholePart = 10;
        const numberOfPoints = (wholePart + fractionalPart) / wholePart;
        setScore(prevNumberOfPoints => prevNumberOfPoints + numberOfPoints);
        toast.success(`${i18n.t('Score.addScore')}`);
      }
    }
  }, [word, getWordsFetch, list]);

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
