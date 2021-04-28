import React, { useCallback, useEffect, useState, MouseEvent } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { SoundOutlined } from '@ant-design/icons';
import { wordsURL } from '@modules/HomePage/WordsList/constants';
import { useHistory } from 'react-router';

const ShortTermStatistics: React.FC = () => {
  const [guessedWords, setGuessedWords] = useState([]);
  const [unpredWords, setUnpredWords] = useState([]);
  const history = useHistory();

  const getAllQuessedWords = useSelector(
    (state: RootStateOrAny) => state.currentWords.quessedWords,
  );

  const getAllUnpredictableWords = useSelector(
    (state: RootStateOrAny) => state.currentWords.unpredWords,
  );

  useEffect(() => {
    setGuessedWords(getAllQuessedWords);
    setUnpredWords(getAllUnpredictableWords);
  }, [getAllQuessedWords, getAllUnpredictableWords]);

  const audioPlay = useCallback(url => {
    const audio = new Audio(wordsURL.audioUrl + url);
    audio.play();
  }, []);

  const handlerAudioButtons = useCallback(
    (audio: string) => (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      audioPlay(audio);
    },
    [audioPlay],
  );

  const hanlderBackButton = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      history.push('/MainPage');
    },
    [history],
  );

  return (
    <>
      <button onClick={hanlderBackButton}>Return</button>
      <h1>{unpredWords.length}</h1>
      <div>
        {unpredWords &&
          unpredWords.map((res, i) => {
            return (
              <div key={i}>
                <SoundOutlined onClick={handlerAudioButtons(res.audio)} />
                <p>{res.word}</p>
                <p>{res.transcription}</p>
              </div>
            );
          })}
      </div>
      <h1>{guessedWords.length}</h1>
      <div>
        {guessedWords &&
          guessedWords.map((res, i) => {
            return (
              <div key={i}>
                <SoundOutlined onClick={handlerAudioButtons(res.audio)} />
                <p>{res.word}</p>
                <p>{res.transcription}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ShortTermStatistics;
