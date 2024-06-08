import React, { useState } from 'react';
import './Card.css'
import { IFlashcard } from '../utils/Interfaces';

type Props = {
  flashcard: IFlashcard;
}

const Card: React.FC<Props> = ({flashcard}) => {
  console.log(flashcard)
  const [isFirstPage, setIsFirstPage] = useState<boolean>(true);
  const [animate, setAnimate] = useState<string>('card-main-container');
  const [cardText, setCardText] = useState<string>(flashcard.question);


  const rotate = () => {
    if (isFirstPage) {
      setAnimate('card-main-container-animate')
      setTimeout(() => {
        setIsFirstPage(!isFirstPage);
        setCardText(flashcard.answer)
        setAnimate('card-main-container');
      }, 1000);
    }
    else {
      setAnimate('card-main-container-animate')
      setTimeout(() => {
        setIsFirstPage(!isFirstPage);
        setCardText(flashcard.question)
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