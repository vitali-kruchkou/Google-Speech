import { call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from '@store/actions/constans.d';
import {
  resetPassword,
  signInEmailAndPassword,
  signInWithGoogle,
  signOut,
  signUpEmailAndPassword,
} from '@firebaseConfig/firebaseAuthQueries';

export function* workerAuthSignIn(args: any) {
  const { email, password } = args.user;
  try {
    const { authChannel } = yield call(signInEmailAndPassword, email, password);
    if (authChannel) {
      yield put({
        type: ActionTypes.SIGN_IN,
        payload: authChannel,
      });
    }
  } catch {
    yield put({
      type: ActionTypes.SIGN_ERROR,
    });
  }
}

export const workerAuthLogOut = function* () {
  try {
    yield call(signOut);
    yield put({
      type: ActionTypes.SIGN_OUT,
    });
  } catch {
    yield put({
      type: ActionTypes.SIGN_ERROR,
    });
  }
};

export const workerAuthSignInGoogle = function* () {
  try {
    const { authChannel } = yield call(signInWithGoogle);
    if (authChannel) {
      yield put({
        type: ActionTypes.SIGN_IN,
        payload: authChannel,
      });
    }
  } catch {
    yield put({
      type: ActionTypes.SIGN_ERROR,
    });
  }
};

export const workerAuthSignUp = function* (args: any) {
  const { email, password } = args.user;
  try {
    const { authChannel } = yield call(signUpEmailAndPassword, email, password);
    if (authChannel) {
      yield put({
        type: ActionTypes.SIGN_UP,
        payload: authChannel,
      });
    }
  } catch {
    yield put({
      type: ActionTypes.SIGN_ERROR,
    });
  }
};

export const workerAuthResetPassword = function* (args: any) {
  const { email } = args.user;
  try {
    yield call(resetPassword, email);
    yield put({
      type: ActionTypes.RESET_PASSW,
    });
  } catch {
    yield put({
      type: ActionTypes.SIGN_ERROR,
    });
  }
};

export default function* watchUserAuth() {
  yield takeLatest(ActionTypes.ASYNC_SIGN_IN, workerAuthSignIn);
  yield takeLatest(ActionTypes.ASYNC_SIGN_OUT, workerAuthLogOut);
  yield takeLatest(ActionTypes.ASYNC_SIGN_IN_GOOGLE, workerAuthSignInGoogle);
  yield takeLatest(ActionTypes.ASYNC_SIGN_UP, workerAuthSignUp);
  yield takeLatest(ActionTypes.ASYNC_RESET_PASSWORD, workerAuthResetPassword);
}
