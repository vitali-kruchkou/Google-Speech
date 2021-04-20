import { call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from '@store/actions/constans.d';
import {
  resetPassword,
  signInEmailAndPassword,
  signInWithGoogle,
  signOut,
  signUpEmailAndPassword,
} from '@firebaseConfig/firebaseAuthQueries';
import {
  resetPasswordAction,
  signErrorAction,
  signInAction,
  signOutAction,
  signUpAction,
} from '@store/actions/authActions';
import {
  AsyncResetPasswordAction,
  AsyncSignInAction,
  AsyncSignUpAction,
} from '@type/types';

export function* workerAuthSignIn(action: AsyncSignInAction) {
  // const { email, password } = args.user;
  const { email, password } = action.payload;

  try {
    const { authChannel } = yield call(signInEmailAndPassword, email, password);
    if (authChannel) {
      yield put(signInAction(authChannel));
    }
  } catch {
    yield put(signErrorAction());
  }
}

export const workerAuthLogOut = function* () {
  try {
    yield call(signOut);
    yield put(signOutAction());
  } catch {
    yield put(signErrorAction());
  }
};

export const workerAuthSignInGoogle = function* () {
  try {
    const { authChannel } = yield call(signInWithGoogle);
    if (authChannel) {
      yield put(signInAction(authChannel));
    }
  } catch {
    yield put(signErrorAction());
  }
};

export const workerAuthSignUp = function* (action: AsyncSignUpAction) {
  const { email, password } = action.payload;
  try {
    const { authChannel } = yield call(signUpEmailAndPassword, email, password);
    if (authChannel) {
      yield put(signUpAction(authChannel));
    }
  } catch {
    yield put(signErrorAction());
  }
};

export const workerAuthResetPassword = function* (
  action: AsyncResetPasswordAction,
) {
  const { email } = action.payload;
  try {
    yield call(resetPassword, email);
    yield put(resetPasswordAction());
  } catch {
    yield put(signErrorAction());
  }
};

export default function* watchUserAuth() {
  yield takeLatest(ActionTypes.ASYNC_SIGN_IN, workerAuthSignIn);
  yield takeLatest(ActionTypes.ASYNC_SIGN_OUT, workerAuthLogOut);
  yield takeLatest(ActionTypes.ASYNC_SIGN_IN_GOOGLE, workerAuthSignInGoogle);
  yield takeLatest(ActionTypes.ASYNC_SIGN_UP, workerAuthSignUp);
  yield takeLatest(ActionTypes.ASYNC_RESET_PASSWORD, workerAuthResetPassword);
}
