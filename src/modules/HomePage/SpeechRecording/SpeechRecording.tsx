import React, { useCallback, useEffect, useRef } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import {
  AsyncGetWordsActions,
  AsyncSetWordActions,
  ClearWordsActions,
} from '@store/actions/wordsActions';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { useTranslation } from 'react-i18next';

const SpeechRecording: React.FC = () => {
  const dispatch = useDispatch();
  const { transcript, resetTranscript } = useSpeechRecognition();
  const microphoneRef = useRef(null);
  const { t } = useTranslation();
  const getWordsGroup = useCallback(
    group => {
      dispatch(AsyncGetWordsActions(group));
    },
    [dispatch],
  );
  useEffect(() => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      alert(`${t('SpeechRecording.notBrowserSupportSpeechRecording')}`);
    }
  }, [t]);

  const renderSpeech = useCallback(() => {
    microphoneRef.current.classList.add('listening');
    SpeechRecognition.startListening({ language: 'en-US' });
  }, []);

  const stopHandle = useCallback(() => {
    microphoneRef.current.classList.remove('listening');
    SpeechRecognition.stopListening();
  }, []);

  const getAllWords = useSelector(
    (state: RootStateOrAny) => state.currentWords.allWords,
  );

  const handleReset = useCallback(() => {
    stopHandle();
    resetTranscript();
    getWordsGroup(0);
    dispatch(ClearWordsActions());
  }, [getWordsGroup, resetTranscript, stopHandle, dispatch]);

  useEffect(() => {
    dispatch(AsyncSetWordActions(transcript));
  }, [dispatch, transcript]);

  return (
    <>
      <div>
        <button onClick={renderSpeech} ref={microphoneRef}>
          {t('SpeechRecording.buttonSpeak')}
        </button>
        <button onClick={handleReset}>
          {t('SpeechRecording.buttonReset')}
        </button>
      </div>
    </>
  );
};

export default SpeechRecording;
