import {
  AsyncGetWordsAction,
  AsyncGetWordsErrorAction,
  AsyncSetWordsAction,
  GetWords,
  GetWordsAction,
  GetWordsErrorAction,
  SetWordsAction,
  SetWord,
} from '@type/types.d';
import { ActionTypes } from './constans.d';

export const GetWordsActions = (words: GetWords | null): GetWordsAction => ({
  type: ActionTypes.GET_WORDS,
  payload: words,
});

export const SetWordsActions = (word: SetWord | null): SetWordsAction => ({
  type: ActionTypes.SET_WORDS,
  payload: word,
});

export const GetWordsErrorActions = (): GetWordsErrorAction => ({
  type: ActionTypes.GET_WORDS_ERROR,
});

export const AsyncGetWordsActions = (
  words: GetWords | null,
): AsyncGetWordsAction => ({
  type: ActionTypes.ASYNC_GET_WORDS,
  payload: words,
});

export const AsyncSetWordsActions = (
  setWord: string | SetWord | null,
): AsyncSetWordsAction => ({
  type: ActionTypes.ASYNC_SET_WORDS,
  payload: setWord,
});

export const AsyncGetWordsErrorActions = (): AsyncGetWordsErrorAction => ({
  type: ActionTypes.ASYNC_GET_WORDS_ERROR,
});
