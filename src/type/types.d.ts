import {
  SIGN_IN,
  SIGN_OUT,
  RESET_PASSW,
  SIGN_UP,
  SIGN_ERROR,
} from 'store/actions/constans';

export type User = {
  email: string;
  uid: string;
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
