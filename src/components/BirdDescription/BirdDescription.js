import React from "react";

const BirdDescription = ({ currentAnswer }) => (
  <div className='bird-details card'>
    <div className='card-body'>
      <img alt="bird" src={currentAnswer.image}></img>
      <div>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><h4>{currentAnswer.name}</h4></li>
          <li className='list-group-item'><span>{currentAnswer.species}</span></li>
          <li className='list-group-item'><audio className='small-player' src={currentAnswer.audio} controls></audio></li>
        </ul>                
      </div>              
    </div>
    <p>{currentAnswer.description}</p>       
  </div>    
);

export default BirdDescription;