import React, { useEffect, useCallback } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectLevel } from '../../state/store';
import { setCorrectAnswerId } from '../../state/actions';

import AppHeader from '../AppHeader';
import ProgressBar from '../ProgressBar';
import CurrentQuestion from '../CurrentQuestion';
import AnswersList from '../AnswersList';
import NextLevelButton from '../NextLevelButton';
import FinalScreen from '../FinalScreen';
import BirdDetails from '../BirdDetails';

 const App = () => {

  const level = useSelector(selectLevel);
  const dispatch = useDispatch();

  const generateCorrectAnswerId = useCallback(() => Math.floor(Math.random() * 6), []);

  useEffect(() => {
    dispatch(setCorrectAnswerId(generateCorrectAnswerId()));
  }, [dispatch, generateCorrectAnswerId, level]);

  return (
    <div className='container'>
      <div className='header d-flex'>
        <AppHeader />
        <ProgressBar />
      </div>
      {
        level === 6 ? <FinalScreen/> : (
          <>
            <CurrentQuestion />
            <div className="row mb2">
              <AnswersList />
              <BirdDetails />
            </div>     
            <NextLevelButton />
          </>
        )
      }        
    </div>
  );  
};

export default App;