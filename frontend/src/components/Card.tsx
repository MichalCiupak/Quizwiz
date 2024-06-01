import React, { useState } from 'react';
import './Card.css'



const Card = () => {
  const [isFirstPage, setIsFirstPage] = useState<boolean>(true);
  const [animate, setAnimate] = useState<string>('card-main-container');
  const [cardText, setCardText] = useState<string>('Lorem ipsum');
  const rotate = () => {
    if (isFirstPage) {
      
      setAnimate('card-main-container-animate')
      setTimeout(() => {
        setIsFirstPage(!isFirstPage);
        setCardText('Marusak')
        setAnimate('card-main-container');
      }, 1000);

    }
    else {
      
      setAnimate('card-main-container-animate')
      setTimeout(() => {
        setIsFirstPage(!isFirstPage);
        setCardText('Lorem ipsum')
        setAnimate('card-main-container');
      }, 1000);
    }
  }
  return (
    <div className={animate} onClick={() => rotate()}>
      <div className='card-text'>
        {cardText}
      </div>
      <div className='card-hint'>
        Click The Card To Flip It
      </div>
    </div>
  )
}

export default Card