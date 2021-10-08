import React, { Component } from 'react';
import './BirdDetails.css';

import BirdDescription from '../BirdDescription';

export default class BirdDetails extends Component {
  
  render() {
    const { currentAnswer } = this.props;
    
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
  }
};