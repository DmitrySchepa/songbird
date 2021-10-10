import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export const SET_SCORE = 'SET_SCORE';
export const SET_IS_LEVEL_COMPLETE = 'SET_IS_LEVEL_COMPLETE';
export const SET_LEVEL = 'SET_LEVEL';
export const SET_CORRECT_ANSWER_ID = 'SET_CORRECT_ANSWER_ID';
export const SET_CURRENT_ANSWER = 'SET_CURRENT_ANSWER';

const initialState = {
  score: 0,
  isLevelComplete: false,
  level: 0,
  correctAnswerId: null,
  currentAnswer: null
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCORE:
      return { ...state, score: action.score };
    case SET_IS_LEVEL_COMPLETE:
      return { ...state, isLevelComplete: action.isLevelComplete };
    case SET_LEVEL:
      return { ...state, level: action.level };
    case SET_CORRECT_ANSWER_ID:
      return { ...state, correctAnswerId: action.correctAnswerId };
    case SET_CURRENT_ANSWER:
      return { ...state, currentAnswer: action.currentAnswer };
    default:
      return state;
  }
};

export const selectScore = (state) => state.score;
export const selectLevel = (state) => state.level;
export const selectCorrectAnswerId = (state) => state.correctAnswerId;
export const selectIsLevelComplete = (state) => state.isLevelComplete;
export const selectCurrentAnswer = (state) => state.currentAnswer;

export const store = createStore(reducer, applyMiddleware(thunk));