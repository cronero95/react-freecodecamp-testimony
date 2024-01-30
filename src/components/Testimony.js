import '../style-sheets/Testimony.css'
import React from 'react';

function Testimony(props) {
  return (
    <div className='testimony-wrapper'>
      <img 
        className='testimony-image'
        src={require(`../images/${props.image}.png`)}
        alt= {props.imageAlt}
      />
      <div className='testimony-text-wrapper'>
        <p className='testimony-name'>
          <b>{props.name}</b> from {props.country}
        </p>
        <p className='testimony-job'>
          {props.job} at <b>{props.company}</b>
        </p>
        <p className='testimony-text'>
          "{props.testimony}"
        </p>
      </div>
    </div>
  );
}

export default Testimony