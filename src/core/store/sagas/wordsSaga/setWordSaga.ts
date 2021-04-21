import { put, takeLatest } from '@redux-saga/core/effects';
import { ActionTypes } from '@store/actions/constans.d';
import {
  getWordsErrorActions,
  setWordsActions,
} from '@store/actions/wordsActions';
import { AsyncSetWordsAction } from '@type/types';

export const workerSetWordsAsync = function* (
  action: AsyncSetWordsAction,
): Generator {
  try {
    yield put(setWordsActions(action.payload));
  } catch {
    yield put(getWordsErrorActions());
  }
};

export default function* watchWordsSet(): Generator {
  yield takeLatest(ActionTypes.ASYNC_SET_WORDS, workerSetWordsAsync);
}
