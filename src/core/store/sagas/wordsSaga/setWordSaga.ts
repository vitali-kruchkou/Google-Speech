import { put, takeLatest } from '@redux-saga/core/effects';
import { ActionTypes } from '@store/actions/constans.d';
import {
  GetWordsErrorActions,
  SetWordsActions,
} from '@store/actions/wordsActions';
import { AsyncSetWordsAction } from '@type/types';

export const workerSetWordsAsync = function* (
  action: AsyncSetWordsAction,
): Generator {
  try {
    yield put(SetWordsActions(action.payload));
  } catch {
    yield put(GetWordsErrorActions());
  }
};

export default function* watchWordsSet(): Generator {
  yield takeLatest(ActionTypes.ASYNC_SET_WORDS, workerSetWordsAsync);
}
