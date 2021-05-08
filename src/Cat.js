import React from 'react';


const Cat = ({ name, id }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <h1>Imaginary Cat Friends</h1>
      <img alt='cat' src={`https://cataas.com/cat`} />
      <div>
        <h2>{name}</h2>
      </div>
    </div>
  );
}

export default Cat;