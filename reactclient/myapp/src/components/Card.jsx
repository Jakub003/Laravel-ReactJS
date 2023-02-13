import React from 'react';
import './card.scss'

const Card = ({title, desc}) => {
  return (
    <div className='card'>
      <div className="wrapper">
        <div className="post">
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Card