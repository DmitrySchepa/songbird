import React, { Component } from 'react';
import bird from './bird.jpg';
import './CurrentQuestion.css';
import birdsData from '../../data/birdsData';

export default class CurrentQuestion extends Component {

  render() {
    const { level, correctAnswerId, isLevelComplete } = this.props;
    const correctAnswer = birdsData[level][correctAnswerId];
    const audio = correctAnswer?.audio;
    return(
      <div className="random-bird">
        <img alt="bird" src={isLevelComplete ? 
          correctAnswer?.image : bird} className='bird-image'></img>
        <div>
          <ul className="list-group list-group-flush">
            <li className='list-group-item'>
              <h3>{isLevelComplete ? correctAnswer?.name : '******'}</h3>
            </li>
            <li className='list-group-item'>
              <audio controls src={audio}></audio>
            </li>
          </ul>
        </div>
      </div>
    )
  }
};