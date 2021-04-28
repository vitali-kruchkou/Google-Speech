import { ThunkAction } from 'redux-thunk';

import { Action } from '@reduxjs/toolkit';
import { ActionTypes } from '@store/actions/constans.d';

export type User = {
  email?: string;
  uid?: string;
  password?: string;
};

export type GetWords = {
  words?: Record<string, unknown>;
  group?: number;
};

export type SetWord = {
  word?: Record<string, unknown>;
  group?: number;
};

// export type AllWords = {
//   allWords: Array<WordsObject>;
//   group?: number;
// };

export type AllWords = Array<WordsObject>;

export type QuessedWords = {
  quessedWords: Record<string, unknown>;
};

export type UnpredictableWords = {
  unpredWords: Array;
};

export type WordsActions =
  | GetWordsAction
  | GetWordsErrorAction
  | SetWordAction
  | AsyncGetWordsAction
  | AsyncSetWordAction
  | AsyncGetWordsErrorAction
  | AllWordsFromSessionAction
  | AsyncAllWordsFromSessionAction
  | ClearWordsAction
  | SetQuessedWordsAction
  | SetUnpredictableWordsAction;

export interface GetWordsAction {
  type: typeof ActionTypes.GET_WORDS;
  payload: GetWords | null;
}

export interface GetWordsErrorAction {
  type: typeof ActionTypes.GET_WORDS_ERROR;
}

export interface SetWordAction {
  type: typeof ActionTypes.SET_WORDS;
  payload: SetWord | null;
}

export interface AllWordsFromSessionAction {
  type: typeof ActionTypes.ALL_WORDS_SESSION;
  payload: AllWords | null;
}

export interface AsyncSetWordAction {
  type: typeof ActionTypes.ASYNC_SET_WORDS;
  payload: SetWord | null | Array;
}
export interface AsyncGetWordsAction {
  type: typeof ActionTypes.ASYNC_GET_WORDS;
  payload: GetWords | null;
}

export interface AsyncGetWordsErrorAction {
  type: typeof ActionTypes.ASYNC_GET_WORDS_ERROR;
}

export interface AsyncAllWordsFromSessionAction {
  type: typeof ActionTypes.ASYNC_ALL_WORDS_SESSION;
  payload: AllWords | null;
}

export interface ClearWordsAction {
  type: typeof ActionTypes.CLEAR_WORDS;
}

export interface SetQuessedWordsAction {
  type: typeof ActionTypes.QUESSED_WORDS;
  payload: QuessedWords | null;
}
export interface SetUnpredictableWordsAction {
  type: typeof ActionTypes.UNPREDICTABLE_WORDS;
  payload: UnpredictableWords | null;
}

export type AuthActions =
  | SignInAction
  | SignUpAction
  | ResetPasswordAction
  | SignOutAction
  | SignErrorAction
  | AsyncSignOutAction
  | AsyncSignInAction
  | AsyncSignInGoogleAction
  | AsyncSignUpAction
  | AsyncResetPasswordAction;

export interface SignInAction {
  type: typeof ActionTypes.SIGN_IN;
  payload: User | null;
}

export interface SignUpAction {
  type: typeof ActionTypes.SIGN_UP;
  payload: User | null;
}

export interface ResetPasswordAction {
  type: typeof ActionTypes.RESET_PASSW;
}

export interface SignOutAction {
  type: typeof ActionTypes.SIGN_OUT;
}

export interface SignErrorAction {
  type: typeof ActionTypes.SIGN_ERROR;
}

export interface AsyncSignOutAction {
  type: typeof ActionTypes.ASYNC_SIGN_OUT;
}

export interface AsyncSignInAction {
  type: typeof ActionTypes.ASYNC_SIGN_IN;
  payload: User | null;
}

export interface AsyncSignInGoogleAction {
  type: typeof ActionTypes.ASYNC_SIGN_IN_GOOGLE;
  payload: User | null;
}

export interface AsyncSignUpAction {
  type: typeof ActionTypes.ASYNC_SIGN_UP;
  payload: User | null;
}

export interface AsyncResetPasswordAction {
  type: typeof ActionTypes.ASYNC_RESET_PASSWORD;
  payload: User | null;
}

export interface AuthState {
  login: boolean;
  user: User | null;
}

export interface WordsObject {
  audio: string;
  audioExample: string;
  audioMeaning: string;
  group: number;
  id: string;
  image: string;
  page: number;
  textExample: string;
  textExampleTranslate: string;
  textMeaning: string;
  textMeaningTranslate: string;
  transcription: string;
  word: string;
  wordTranslate: string;
  wordsPerExampleSentence: number;
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, Action<string>>;
