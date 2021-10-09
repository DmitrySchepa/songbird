import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './AnswersList.css';
import birdsData from '../../data/birdsData';
import clsx from 'clsx'

const AnswersList = ({
  level, setCurrentAnswer, correctAnswerId, setIsLevelComplete, isLevelComplete, setScore
}) => {
  const [chosenAnswers, setChosenAnswer ] = useState([]);

  const chooseAnswer = useCallback((ind, isCorrect) => 
    isLevelComplete ? setChosenAnswer([]) : 
    setChosenAnswer([...chosenAnswers, {index: ind, isCorrect}]), [chosenAnswers, isLevelComplete]);

  const setClassName = useCallback((ind) => {
    const [answer] = chosenAnswers.filter((el) => el.index === ind);
    if (answer) {
      return clsx('li-btn', answer.isCorrect ? 'correct' : 'error');
    }
    return clsx('li-btn');
  }, [chosenAnswers]);

  useEffect(() => {
    setChosenAnswer([]);
  }, [level]);

  const handleClick = useCallback((el, ind) => {
    setCurrentAnswer(el);
    chooseAnswer(ind, false);
    if (correctAnswerId === ind) {
      const points = 5 - chosenAnswers.length; 
      setIsLevelComplete(true);
      setScore(prevScore => prevScore + points);
      chooseAnswer(ind, true);
    }
  }, [chooseAnswer, chosenAnswers.length, correctAnswerId, setCurrentAnswer, setIsLevelComplete, setScore]);

  const birds = useMemo(() => birdsData[level].map((el, ind) => (        
    <li
      className='list-group-item'
      key={el.id}
      onClick={() => handleClick(el, ind)}
    >
      <span className={setClassName(ind)}></span>
      {el.name}
    </li>
  )), [handleClick, level, setClassName]);

  return (
    <div className='col-md-6'>
      <ul className='item-list list-group'>
        {birds}
      </ul>
    </div>      
  )
};

export default AnswersList;

