import { ThunkAction } from 'redux-thunk';

import { Action } from '@reduxjs/toolkit';
import { ActionTypes } from '@store/actions/constans.d';

export type User = {
  email?: string;
  uid?: string;
  password?: string;
};

export type getWords = {
  words?: Record<string, unknown>;
  group?: number;
};

export type setWord = {
  word?: Record<string, unknown>;
  group?: number;
};

export type WordsActions =
  | getWordsAction
  | getWordsErrorAction
  | setWordsAction
  | AsyncGetWordsAction
  | AsyncSetWordsAction
  | AsyncGetWordsErrorAction;

export interface getWordsAction {
  type: typeof ActionTypes.GET_WORDS;
  payload: Words | null;
}

export interface getWordsErrorAction {
  type: typeof ActionTypes.GET_WORDS_ERROR;
}

export interface setWordsAction {
  type: typeof ActionTypes.SET_WORDS;
  payload: Words | null;
}

export interface AsyncSetWordsAction {
  type: typeof ActionTypes.ASYNC_SET_WORDS;
  payload: Words | null;
}
export interface AsyncGetWordsAction {
  type: typeof ActionTypes.ASYNC_GET_WORDS;
  payload: Words | null;
}

export interface AsyncGetWordsErrorAction {
  type: typeof ActionTypes.ASYNC_GET_WORDS_ERROR;
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

export interface WordsState {
  words?: getWords | null;
  word?: setWord | null;
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, Action<string>>;
