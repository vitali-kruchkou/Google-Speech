import React, { useCallback, useEffect, useState, MouseEvent } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { AsyncGetWordsActions } from '@store/actions/wordsActions';
import { Group, wordsURL } from './constants';
import Style from './StyledWordList';
import { SoundOutlined } from '@ant-design/icons';

const WordsList: React.FC = () => {
  const dispatch = useDispatch();
  const easyGroup = 0;
  const Groups = [0, 1, 2, 3, 4, 5];

  const getWordsGroup = useCallback(
    group => {
      dispatch(AsyncGetWordsActions(group));
    },
    [dispatch],
  );

  useEffect(() => {
    getWordsGroup(easyGroup);
  }, [getWordsGroup]);

  const [words, setWords] = useState([]);
  const [image, setImage] = useState<string>(wordsURL.startImageUrl);
  const [Buttons] = useState(Groups);

  const getWordsFetch = useSelector(
    (state: RootStateOrAny) => state.currentWords.words,
  );

  const speechWord = useSelector(
    (state: RootStateOrAny) => state.currentWords.word,
  );

  useEffect(() => {
    setWords(getWordsFetch);
  }, [getWordsFetch]);

  const audioPlay = useCallback(url => {
    const audio = new Audio(wordsURL.audioUrl + url);
    audio.play();
  }, []);

  const getImages = useCallback(
    image => {
      setImage(wordsURL.imageUrl + image);
    },
    [setImage],
  );

  const handlerButtonsGroups = useCallback(
    (group: number) => (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      getWordsGroup(group);
    },
    [getWordsGroup],
  );

  const handlerImagesButtons = useCallback(
    (image: string) => (event: MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      getImages(image);
    },
    [getImages],
  );

  const handlerAudioButtons = useCallback(
    (audio: string) => (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      audioPlay(audio);
    },
    [audioPlay],
  );

  return (
    <>
      <Style.Container>
        <Style.Groups>
          {Buttons.map(i => {
            return (
              <button key={i} onClick={handlerButtonsGroups(i)}>
                {Group[i]}
              </button>
            );
          })}
        </Style.Groups>
        <Style.MainImage>
          <img src={image} />
        </Style.MainImage>
        <Style.WordsContainer>
          {words &&
            words.map((res, i) => {
              return (
                <Style.Words
                  key={i}
                  onClick={handlerImagesButtons(res.image)}
                  className={speechWord == res.word ? 'Active' : undefined}>
                  <SoundOutlined onClick={handlerAudioButtons(res.audio)} />
                  <Style.WordsText>
                    <p>{res.word}</p>
                    <p>{res.transcription}</p>
                  </Style.WordsText>
                </Style.Words>
              );
            })}
        </Style.WordsContainer>
      </Style.Container>
    </>
  );
};

export default WordsList;
