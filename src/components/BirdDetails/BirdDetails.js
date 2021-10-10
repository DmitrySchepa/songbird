import React from 'react';
import './BirdDetails.css';
import { useSelector } from 'react-redux';
import { selectCurrentAnswer } from '../../state/store';

import BirdDescription from '../BirdDescription';

const BirdDetails = () => {

	const currentAnswer = useSelector(selectCurrentAnswer);
    
  return (
    <div className='col-md-6'>
      {currentAnswer ?
        <BirdDescription currentAnswer={currentAnswer}/> :
        <div className='bird-details card'>
          <p className='instruction'>Listen to the player. Select a bird from the list.</p>
        </div>
      }
    </div> 
  );
};

export default BirdDetails;