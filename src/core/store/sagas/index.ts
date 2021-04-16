import { all } from '@redux-saga/core/effects';
import watchUserAuth from './auth';

export default function* rootSaga() {
  yield all([watchUserAuth()]);
}
