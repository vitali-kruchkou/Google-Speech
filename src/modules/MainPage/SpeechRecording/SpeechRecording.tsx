import React, { useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { asyncSetWordsActions } from '@store/actions/wordsActions';

const SpeechRecording: React.FC = () => {
  const dispatch = useDispatch();
  const getWord = useSelector(
    (state: RootStateOrAny) => state.currentWords.words,
  );

  const [scope, setScope] = useState(0);

  const SpeechRecognition =
    (window as any).SpeechRecognition ||
    (window as any).webkitSpeechRecognition;
  const SpeechGrammarList =
    (window as any).SpeechGrammarList ||
    (window as any).webkitSpeechGrammarList;
  const lists: any[] = [];

  if (getWord) {
    for (let i = 0; i < getWord.length; i++) {
      lists.push(getWord[i].word);
    }
  }

  const grammar =
    '#JSGF V1.0; grammar moods; public <moods> = ' + lists.join(' | ') + ';';
  console.log(grammar);

  const recognition = new SpeechRecognition();
  const recognitionList = new SpeechGrammarList();
  recognitionList.addFromString(grammar, 1);
  recognition.grammars = recognitionList;
  recognition.lang = 'en-US';
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  const renderSpeech = () => {
    recognition.start();
    recognition.onresult = (event: any) => {
      const word = event.results[0][0].transcript;
      dispatch(asyncSetWordsActions(word));
      if (lists.includes(word)) {
        const firstNumber = Number(getWord[0].group);
        const number = ((10 + firstNumber) / 10) * 1;
        setScope(scope + number);
      } else {
        console.log('false');
      }
    };
  };

  return (
    <>
      <div>
        <h1>Speech</h1>
        <button onClick={renderSpeech}>Press to Talk</button>
      </div>
      {console.log(scope)}
    </>
  );
};

export default SpeechRecording;
