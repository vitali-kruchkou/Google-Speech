import {
  resetPassword,
  signInEmailAndPassword,
  signInWithGoogle,
  signUpEmailAndPassword,
} from '@firebaseConfig/firebaseAuthQueries';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, AppThunk, User } from '@type/types';
import toast from 'react-hot-toast';

const initialState = {
  login: false,
  user: null as any,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<User>) => {
      return {
        ...state,
        login: true,
        user: action.payload,
      };
    },
    signOut: state => {
      return {
        ...state,
        login: false,
        user: null,
      };
    },
    resetPass: state => {
      return {
        ...state,
        login: false,
      };
    },
    signUp: (state, action: PayloadAction<User>) => {
      return {
        ...state,
        login: true,
        user: action.payload,
      };
    },
    signError: state => {
      return {
        ...state,
        login: false,
      };
    },
  },
});

export const signInGoogle = (): AppThunk => async (dispatch: AppDispatch) => {
  try {
    await signInWithGoogle().then(({ user }) => {
      if (user !== undefined) {
        const { uid, email } = user;
        dispatch(authSlice.actions.signIn({ uid, email }));
      }
    });
  } catch (error) {
    toast.error(error.message);
    dispatch(authSlice.actions.signError());
  }
};

export const signInEmail = (
  email: string,
  password: string,
): AppThunk => async (dispatch: AppDispatch) => {
  try {
    await signInEmailAndPassword(email, password).then(({ user }) => {
      if (user !== undefined) {
        const { uid, email } = user;
        dispatch(authSlice.actions.signIn({ uid, email }));
      }
    });
  } catch (error) {
    toast.error(error.message);
    dispatch(authSlice.actions.signError());
  }
};

export const signUpEmail = (
  email: string,
  password: string,
): AppThunk => async (dispatch: AppDispatch) => {
  try {
    await signUpEmailAndPassword(email, password).then(({ user }) => {
      const { uid, email } = user;
      dispatch(authSlice.actions.signUp({ uid, email }));
    });
  } catch (error) {
    toast.error(error.message);
    dispatch(authSlice.actions.signError());
  }
};

export const resetPassw = (email: string): AppThunk => async (
  dispatch: AppDispatch,
) => {
  try {
    await resetPassword(email).then(() => {
      dispatch(authSlice.actions.resetPass());
    });
  } catch (error) {
    toast.error(error.message);
    dispatch(authSlice.actions.signError());
  }
};

export const {
  signIn,
  signOut,
  resetPass,
  signUp,
  signError,
} = authSlice.actions;

export default authSlice.reducer;
