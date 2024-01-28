import React from 'react';

function Testimony() {
  return (
    <div className='testimony-wrapper'>
      <img 
        className='testimony-image'
        src={require('../images/Emma.png')}
        alt='A young woman with black hair, white skin, and blue eyes'
      />
      <div className='testimony-text-wrapper'>
        <p className='tetimony-name'>
          Emma Bostian from Sweden
        </p>
        <p className='testimony-job'>
          Software Engineer at Spotify
        </p>
        <p className='testimony-text'>
          I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.
        </p>
      </div>
    </div>
  );
}

export default Testimony