import React from 'react';
import bird from './bird.jpg';
import './CurrentQuestion.css';
import birdsData from '../../data/birdsData';

const CurrentQuestion = ({ level, correctAnswerId, isLevelComplete }) => {

  const correctAnswer = birdsData[level][correctAnswerId];
  const audio = correctAnswer?.audio;

  return (
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
};

export default CurrentQuestion;