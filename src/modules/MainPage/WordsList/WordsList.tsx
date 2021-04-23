import React, { useCallback, useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { asyncGetWordsActions } from '@store/actions/wordsActions';
import { audioUrl, imageUrl, startImageUrl } from './constants';
import Style from './StyledWordList';
import { SoundOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const WordsList: React.FC = () => {
  useEffect(() => {
    getWordsGroup(0);
  }, []);

  const [words, setWords] = useState([]);
  const [image, setImage] = useState(startImageUrl);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const getWordsGroup = useCallback(
    group => {
      dispatch(asyncGetWordsActions(group));
    },
    [dispatch],
  );

  const getWordsFetch = useSelector(
    (state: RootStateOrAny) => state.currentWords.words,
  );

  useEffect(() => {
    setWords(getWordsFetch);
  }, [getWordsFetch]);

  const audioPlay = useCallback((url: string) => {
    const audio = new Audio(audioUrl + url);
    audio.play();
  }, []);

  const handlerButton = useCallback(
    (url: { image: string; audio: string }) => {
      const { image } = url;
      setImage(imageUrl + image);
    },
    [setImage],
  );

  return (
    <>
      <Style.Container>
        <Style.Groups>
          <button onClick={() => getWordsGroup(0)}>
            {t('GroupsWord.Group0')}
          </button>
          <button onClick={() => getWordsGroup(1)}>
            {t('GroupsWord.Group1')}
          </button>
          <button onClick={() => getWordsGroup(2)}>
            {t('GroupsWord.Group2')}
          </button>
          <button onClick={() => getWordsGroup(3)}>
            {t('GroupsWord.Group3')}
          </button>
          <button onClick={() => getWordsGroup(4)}>
            {t('GroupsWord.Group4')}
          </button>
          <button onClick={() => getWordsGroup(5)}>
            {t('GroupsWord.Group5')}
          </button>
        </Style.Groups>
        <Style.MainImage>
          <img src={image} />
        </Style.MainImage>
        <Style.WordsContainer>
          {words !== null ? (
            words.map(function (res, i) {
              return (
                <Style.Words key={i} onClick={() => handlerButton(res)}>
                  <SoundOutlined onClick={() => audioPlay(res.audio)} />
                  <Style.WordsText>
                    <p>{res.word}</p>
                    <p>{res.transcription}</p>
                  </Style.WordsText>
                </Style.Words>
              );
            })
          ) : (
            <div> {t('WordList.waitText')}</div>
          )}
        </Style.WordsContainer>
      </Style.Container>
    </>
  );
};

export default WordsList;
