import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RootStateOrAny, useSelector } from 'react-redux';

const Score: React.FC = () => {
  const [score, setScore] = useState(0);
  const [list, setList] = useState([]);
  const [word, setWord] = useState('');
  const { t } = useTranslation();
  const getWordsFetch = useSelector(
    (state: RootStateOrAny) => state.currentWords.words,
  );

  const speechWord = useSelector(
    (state: RootStateOrAny) => state.currentWords.word,
  );

  useEffect(() => {
    if (getWordsFetch) {
      setList(
        getWordsFetch.map((res: Record<string, unknown>) => {
          return res.word;
        }),
      );
    }
  }, [getWordsFetch]);

  useEffect(() => {
    setWord(speechWord);
    if (word) {
      const index = list.indexOf(word);
      setList(list.filter((item: string, i: number) => i !== index));
    }
  }, [speechWord]);

  useEffect(() => {
    if (list.includes(word)) {
      const firstNumber = Number(getWordsFetch[0].group);
      const number = ((10 + firstNumber) / 10) * 1;
      setScore(prevNumber => prevNumber + number);
    }
  }, [word]);

  return (
    <>
      <h1>
        {t('Score.mainTetx')}: {score}
      </h1>
    </>
  );
};

export default Score;
