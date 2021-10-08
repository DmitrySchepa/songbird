import React from 'react';
import './NextLevelButton.css';
import clsx from 'clsx'

const NextLevelButton = ({isLevelComplete, setCurrentLevel, setCurrentAnswer }) => {  

  return (
    <button
      type='button'
      className={clsx('btn', isLevelComplete && 'complete')}
      disabled={!isLevelComplete}
      onClick={() => {
        setCurrentLevel();
        setCurrentAnswer(null);
      }}
    >
      Next Level
    </button>
  )
};

export default NextLevelButton;