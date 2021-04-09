import { ThunkAction } from 'redux-thunk';
import {
  SIGN_IN,
  SIGN_OUT,
  RESET_PASSW,
  SIGN_UP,
  SIGN_ERROR,
} from 'store/actions/constans';
import { Action } from '@reduxjs/toolkit';
export type User = {
  email: any;
  uid: any;
};

export type AuthActions =
  | {
      type: typeof SIGN_IN;
      payload: User | null;
    }
  | {
      type: typeof SIGN_UP;
      payload: User | null;
    }
  | {
      type: typeof RESET_PASSW;
    }
  | {
      type: typeof SIGN_OUT;
    }
  | {
      type: typeof SIGN_ERROR;
    };

export type AuthState = {
  login: boolean;
  user: User | null;
};

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, Action<string>>;
