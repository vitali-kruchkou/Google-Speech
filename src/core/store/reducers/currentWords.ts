import { ActionTypes } from '@store/actions/constans.d';
import {
  AllWords,
  GetWords,
  QuessedWords,
  SetWord,
  UnpredictableWords,
  WordsActions,
} from '@type/types';

export interface WordsState<T = []> {
  words?: GetWords | null | Array<T>;
  setWord?: SetWord | null;
  allWords?: AllWords;
  quessedWords: QuessedWords | null | any;
  unpredWords: UnpredictableWords | null | any;
}

const initialState: WordsState = {
  words: [],
  allWords: [],
  quessedWords: [],
  unpredWords: [],
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
    case ActionTypes.ALL_WORDS_SESSION: {
      return {
        ...state,
        allWords: [...state.allWords, action.payload].flat(),
        // allWords: [...state.allWords, ...(action.payload || [])],
      };
    }
    case ActionTypes.CLEAR_WORDS: {
      return {
        ...state,
        allWords: [],
        quessedWords: [],
        unpredWords: [],
      };
    }
    case ActionTypes.QUESSED_WORDS: {
      return {
        ...state,
        quessedWords: action.payload,
      };
    }
    case ActionTypes.UNPREDICTABLE_WORDS: {
      return {
        ...state,
        unpredWords: action.payload,
      };
    }
    default:
      return state;
  }
};

export default currentWords;
