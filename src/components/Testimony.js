import '../style-sheets/Testimony.css'
import React from 'react';

function Testimony(props) {
  return (
    <div className='testimony-wrapper'>
      <img 
        className='testimony-image'
        src={require('../images/Emma.png')}
        alt='A young woman with black hair, white skin, and blue eyes'
      />
      <div className='testimony-text-wrapper'>
        <p className='testimony-name'>
          {props.name} from {props.country}
        </p>
        <p className='testimony-job'>
          {props.job} at {props.company}
        </p>
        <p className='testimony-text'>
          "{props.testimony}"
        </p>
      </div>
    </div>
  );
}

export default Testimony