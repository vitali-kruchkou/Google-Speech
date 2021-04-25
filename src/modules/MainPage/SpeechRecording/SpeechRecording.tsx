import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  AsyncGetWordsActions,
  AsyncSetWordsActions,
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

  const handleReset = useCallback(() => {
    stopHandle();
    resetTranscript();
    getWordsGroup(0);
  }, [getWordsGroup, resetTranscript, stopHandle]);

  useEffect(() => {
    dispatch(AsyncSetWordsActions(transcript));
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
