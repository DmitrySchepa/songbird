import React, { Component } from 'react';
import './AnswersList.css';
import birdsData from '../../data/birdsData';
import clsx from 'clsx'

export default class AnswersList extends Component {
  
  state = {
    chosenAnswers: []
  }

  setChosenAnswers = (ind, isCorrect) => {
    this.setState((state) => ({
      ...state,
      chosenAnswers: this.props.isLevelComplete ? this.state.chosenAnswers :
        [...this.state.chosenAnswers, {index: ind, isCorrect}]
    }));
  };

  setClassName = (ind) => {
    const [answer] = this.state.chosenAnswers.filter((el) => el.index === ind);
    if (answer) {
      return clsx('li-btn', answer.isCorrect ? 'correct' : 'error');
    }
    return clsx('li-btn');
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.level !== this.props.level) {
      this.setState((state) => ({
        ...state,
        chosenAnswers: []
      }));
    }
  }

  render() {
    const { level, setCurrentAnswer, correctAnswerId, setIsLevelComplete } = this.props;
    const points = 5 - this.state.chosenAnswers.length;

    const birds = birdsData[level].map((el, ind) => (        
      <li
        className='list-group-item'
        key={el.id}
        onClick={() => {
          setCurrentAnswer(el);
          this.setChosenAnswers(ind, false);
          if (correctAnswerId === ind) {
            setIsLevelComplete(points);
            this.setChosenAnswers(ind, true);
          }
        }}
      >
        <span className={this.setClassName(ind)}></span>
        {el.name}
      </li>
    ));

    return(
      <div className='col-md-6'>
        <ul className='item-list list-group'>
          {birds}
        </ul>
      </div>      
    )
  }
};