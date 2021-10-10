import {
  SET_SCORE,
  SET_IS_LEVEL_COMPLETE,
  SET_LEVEL,
  SET_CORRECT_ANSWER_ID,
  SET_CURRENT_ANSWER
} from './store';

export const setScore = (score) => ({
  type: SET_SCORE,
  score
});

export const setIsLevelComplete = (isLevelComplete) => ({
  type: SET_IS_LEVEL_COMPLETE,
  isLevelComplete
});

export const setLevel = (level) => ({
  type: SET_LEVEL,
  level
});

export const setCorrectAnswerId = (correctAnswerId) => ({
  type: SET_CORRECT_ANSWER_ID,
  correctAnswerId
});

export const setCurrentAnswer = (currentAnswer) => ({
  type: SET_CURRENT_ANSWER,
  currentAnswer
});