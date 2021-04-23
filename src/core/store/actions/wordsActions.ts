import {
  AsyncGetWordsAction,
  AsyncGetWordsErrorAction,
  AsyncSetWordsAction,
  getWords,
  getWordsAction,
  getWordsErrorAction,
  setWordsAction,
  setWord,
} from '@type/types.d';
import { ActionTypes } from './constans.d';

export const getWordsActions = (words: getWords | null): getWordsAction => {
  return {
    type: ActionTypes.GET_WORDS,
    payload: words,
  };
};

export const setWordsActions = (word: setWord | null): setWordsAction => {
  return {
    type: ActionTypes.SET_WORDS,
    payload: word,
  };
};

export const getWordsErrorActions = (): getWordsErrorAction => {
  return {
    type: ActionTypes.GET_WORDS_ERROR,
  };
};

export const asyncGetWordsActions = (
  words: getWords | null,
): AsyncGetWordsAction => {
  return {
    type: ActionTypes.ASYNC_GET_WORDS,
    payload: words,
  };
};

export const asyncSetWordsActions = (
  word: string | setWord | null,
): AsyncSetWordsAction => {
  return {
    type: ActionTypes.ASYNC_SET_WORDS,
    payload: word,
  };
};

export const asyncGetWordsErrorActions = (): AsyncGetWordsErrorAction => {
  return {
    type: ActionTypes.ASYNC_GET_WORDS_ERROR,
  };
};
