import React, { useCallback } from 'react';
import './NextLevelButton.css';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLevelComplete, selectLevel } from '../../state/store';
import { 
  setLevel,
  setCurrentAnswer,
  setIsLevelComplete 
} from '../../state/actions';

const NextLevelButton = () => {  

  const isLevelComplete = useSelector(selectIsLevelComplete);
  const dispatch = useDispatch();
  const level = useSelector(selectLevel);

  const handleClick = useCallback(() => {
    dispatch(setLevel(level + 1));
    dispatch(setCurrentAnswer(null));
    dispatch(setIsLevelComplete(false));
  }, [dispatch, level]);

  const getClassName = useCallback(
    () => clsx('btn', isLevelComplete && 'complete'), [isLevelComplete]
  );

  return (
    <button
      type='button'
      className={getClassName()}
      disabled={!isLevelComplete}
      onClick={handleClick}
    >
      Next Level
    </button>
  )
};

export default NextLevelButton;