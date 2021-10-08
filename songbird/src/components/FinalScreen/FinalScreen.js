import React from "react";
import './FinalScreen.css';

const FinalScreen = ({score}) => {

  const handleClick = () => window.location.reload();
  return (
    <div>
      <h1 className='display-3 text-center'>Congratulations!</h1>
      <p className='text-center score'>You scored {score} of 30 possible points.</p>
      <hr/>
      <button
        onClick={handleClick}
        className='btn complete'
      >
        Try one more time
      </button>
    </div>
  );
}

export default FinalScreen;