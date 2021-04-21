import { call, put, takeLatest } from '@redux-saga/core/effects';
import { ActionTypes } from '@store/actions/constans.d';
import {
  getWordsActions,
  getWordsErrorActions,
} from '@store/actions/wordsActions';
import { AsyncGetWordsAction } from '@type/types';

export const fetchWordsAsync = function* (
  action: AsyncGetWordsAction,
): Generator {
  try {
    const group = action.payload;
    const words: any = yield call(() => {
      const page =
        Math.floor(Math.random() * (Math.floor(30) - Math.ceil(0))) +
        Math.ceil(0);
      const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`;
      return fetch(url).then(res => res.json());
    });

    const numbers = new Set();
    while (numbers.size < 10) {
      const items = words[Math.floor(Math.random() * words.length)];
      numbers.add(items);
    }
    const arr: unknown = Array.from(numbers);
    yield put(getWordsActions(arr));
  } catch {
    yield put(getWordsErrorActions());
  }
};

export default function* watchWordsGet(): Generator {
  yield takeLatest(ActionTypes.ASYNC_GET_WORDS, fetchWordsAsync);
}
