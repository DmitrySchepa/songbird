import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './AnswersList.css';
import birdsData from '../../data/birdsData';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { selectLevel, selectCorrectAnswerId, selectIsLevelComplete, selectScore } from '../../state/store';
import { setScore, setCurrentAnswer, setIsLevelComplete } from '../../state/actions';

const AnswersList = () => {

  const dispatch = useDispatch();
  const [chosenAnswers, setChosenAnswer ] = useState([]);
  const level = useSelector(selectLevel);
  const correctAnswerId = useSelector(selectCorrectAnswerId);
  const isLevelComplete = useSelector(selectIsLevelComplete);
  const score = useSelector(selectScore);


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
    dispatch(setCurrentAnswer(el));
    chooseAnswer(ind, false);
    if (correctAnswerId === ind) {
      const points = 5 - chosenAnswers.length; 
      dispatch(setIsLevelComplete(true));
      dispatch(setScore(score + points));
      chooseAnswer(ind, true);
    }
  }, [chooseAnswer, chosenAnswers.length, correctAnswerId, dispatch, score]);

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

