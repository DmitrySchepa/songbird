import React, { Component } from 'react';
import './App.css';

import AppHeader from '../AppHeader';
import ProgressBar from '../ProgressBar';
import CurrentQuestion from '../CurrentQuestion';
import AnswersList from '../AnswersList';
import NextLevelButton from '../NextLevelButton';
import FinalScreen from '../FinalScreen';
import BirdDetails from '../BirdDetails';

export default class App extends Component {

  state = {
    score: 0,
    isLevelComplete: false,
    level: 0,
    correctAnswerId: null,
    currentAnswer: null
  };

  setCurrentAnswer = (answer) => {
    this.setState({
      currentAnswer: answer
    });
  };

  generateCorrectAnswerId() {
    return Math.floor(Math.random() * 6);
  }

  setCorrectAnswerId() {
    this.setState((state) => ({
      ...state,
      correctAnswerId: this.generateCorrectAnswerId()
    }));
  }

  setIsLevelComplete = (points) => {
    this.setState((state) => ({
      ...state,
      isLevelComplete: true,
      score: this.state.score + points
    }));
  }

  setCurrentLevel = () => {
    this.setState((state) => ({
      ...state,
      level: this.state.level + 1,
      isLevelComplete: false
    }));
  };

  componentDidMount() {
    this.setCorrectAnswerId()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.level !== this.state.level) {
      this.setCorrectAnswerId();
    }
  }

  render() {
    const { level, score, correctAnswerId, isLevelComplete, currentAnswer } = this.state;

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
                  setCurrentAnswer={this.setCurrentAnswer}
                  setIsLevelComplete={this.setIsLevelComplete}
                />
                <BirdDetails
                  currentAnswer={currentAnswer}
                  correctAnswerId={correctAnswerId}
                />
              </div>     
              <NextLevelButton 
                isLevelComplete={isLevelComplete}
                setCurrentLevel={this.setCurrentLevel}
                setCurrentAnswer={this.setCurrentAnswer}
              />
            </>
          )
        }        
        
      </div>
    );  
  }
};