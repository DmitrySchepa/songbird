import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

import AppHeader from '../AppHeader';
import ProgressBar from '../ProgressBar';
import CurrentQuestion from '../CurrentQuestion';
import AnswersList from '../AnswersList';
import NextLevelButton from '../NextLevelButton';
import FinalScreen from '../FinalScreen';
import BirdDetails from '../BirdDetails';

 const App = () => {

  const [score, setScore ] = useState(0);
  const [isLevelComplete, setIsLevelComplete ] = useState(false);
  const [level, setCurrentLevel ] = useState(0);
  const [correctAnswerId, setCorrectAnswerId ] = useState(null);
  const [currentAnswer, setCurrentAnswer ] = useState(null);

  const generateCorrectAnswerId = useCallback(() => Math.floor(Math.random() * 6), []);

  useEffect(() => {
    setCorrectAnswerId(generateCorrectAnswerId());
  }, [generateCorrectAnswerId, level]);

  return (
    <div className='container'>
      <div className='header d-flex'>
        <AppHeader score={score}/>
        <ProgressBar level={level}/>
      </div>
      {
        level === 6 ? <FinalScreen score={score}/> : (
          <>
            <CurrentQuestion
              level={level} 
              correctAnswerId={correctAnswerId} 
              isLevelComplete={isLevelComplete}
            />
            <div className="row mb2">
              <AnswersList
                correctAnswerId={correctAnswerId}
                level={level}
                isLevelComplete={isLevelComplete}
                setCurrentAnswer={setCurrentAnswer}
                setIsLevelComplete={setIsLevelComplete}
                setScore={setScore}
                currentAnswer={currentAnswer}
              />
              <BirdDetails
                currentAnswer={currentAnswer}
                correctAnswerId={correctAnswerId}
              />
            </div>     
            <NextLevelButton 
              isLevelComplete={isLevelComplete}
              setCurrentLevel={setCurrentLevel}
              setIsLevelComplete={setIsLevelComplete}
              setCurrentAnswer={setCurrentAnswer}
            />
          </>
        )
      }        
    </div>
  );  
};

export default App;