import React, { useCallback } from 'react';
import './NextLevelButton.css';
import clsx from 'clsx'

const NextLevelButton = ({
  isLevelComplete,
  setCurrentLevel,
  setCurrentAnswer,
  setIsLevelComplete
}) => {  

  const handleClick = useCallback(() => {
    setCurrentLevel(prevLevel => prevLevel + 1);
    setCurrentAnswer(null);
    setIsLevelComplete(false);
  }, [setCurrentAnswer, setCurrentLevel, setIsLevelComplete]);

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