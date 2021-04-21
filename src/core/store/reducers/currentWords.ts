const initialState: WordsState = {
  words: null as null,
};
import { ActionTypes } from '@store/actions/constans.d';
import { WordsActions, WordsState } from '@type/types';

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
        word: action.payload,
      };
    }
    default:
      return state;
  }
};

export default currentWords;
