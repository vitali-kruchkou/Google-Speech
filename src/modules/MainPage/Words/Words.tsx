import React, { useCallback, useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { asyncGetWordsActions } from '@store/actions/wordsActions';

const Words: React.FC = () => {
  useEffect(() => {
    getWords(0);
  }, []);

  const getWord = useSelector(
    (state: RootStateOrAny) => state.currentWords.words,
  );

  useEffect(() => {
    setWords(getWord);
  }, [getWord]);

  const [words, setWords] = useState([]);
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const getWords = useCallback(
    group => {
      dispatch(asyncGetWordsActions(group));
    },
    [dispatch],
  );

  const audioPlay = useCallback((url: string) => {
    const audio = new Audio(
      `https://raw.githubusercontent.com/vitali-kruchkou/rslang-data/master/${url}`,
    );
    audio.play();
  }, []);

  const handlerButton = useCallback(
    (url: string) => {
      setImage(
        `https://raw.githubusercontent.com/vitali-kruchkou/rslang-data/master/${url}`,
      );
    },
    [setImage],
  );

  return (
    <>
      <button onClick={() => getWords(0)}>Words 0</button>
      <button onClick={() => getWords(1)}>Words 1</button>
      <button onClick={() => getWords(2)}>Words 2</button>
      <button onClick={() => getWords(3)}>Words 3</button>
      <button onClick={() => getWords(4)}>Words 4</button>
      <button onClick={() => getWords(5)}>Words 5</button>
      <div>
        {words !== null ? (
          words.map(function (res, i) {
            return (
              <div key={i}>
                <div onClick={() => handlerButton(res.image)}>
                  <div onClick={() => audioPlay(res.audio)}>
                    <p>{res.word}</p>
                    <p>{res.transcription}</p>
                    <img
                      src={`https://raw.githubusercontent.com/vitali-kruchkou/rslang-data/master/${res.image}`}
                    />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>Please, wait</div>
        )}
      </div>
      <img src={image} />
    </>
  );
};

export default Words;
