import { ActionTypes } from '@store/actions/constans.d';
import { GetWords, SetWord, WordsActions } from '@type/types';

export interface WordsState {
  words?: GetWords | null;
  setWord?: SetWord | null;
}

const initialState: WordsState = {
  words: null as null,
};

const currentWords = (
  state: WordsState = initialState,
  action: WordsActions,
): WordsState => {
  switch (action.type) {
    case ActionTypes.GET_WORDS: {
      return {
        ...state,
        words: action.payload,
      };
    }
    case ActionTypes.SET_WORDS: {
      return {
        ...state,
        setWord: action.payload,
      };
    }
    default:
      return state;
  }
};

export default currentWords;
