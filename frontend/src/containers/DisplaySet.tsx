import React, { useState, useEffect } from 'react';
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import './Containers.css'
import Card from '../components/Card'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowRightArrowLeft, FaRegStar } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';
import { IFlashcardSet, IFlashcard } from '../utils/Interfaces' 
import AxiosInstance from '../utils/AxiosInstance';
import { IUser } from '../utils/Interfaces';

const DisplaySet = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0);
  const storedUserName = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');
  const storedUserId = localStorage.getItem('userId');
  const [starStyle, setStarStyle] = useState<string>('');
  const location = useLocation();
  const flashcardSet = location.state?.cardSet as IFlashcardSet;
  const [flashcardList, setFlashcardList] = useState<IFlashcard[]>(flashcardSet.flashcards);
  
  const currentFlashcard = flashcardList[currentIndex];

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser){
      const user: IUser = JSON.parse(storedUser);
      if (user?.savedCardSets.includes(flashcardSet.id)){
        setStarStyle('star-icon-big');
      }
    }
  }, []);

  const handleNext = () => {
    if (currentIndex < flashcardList.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setKey(prevKey => prevKey + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setKey(prevKey => prevKey + 1);
    }
  };

  const handleSave = () => {
    if (starStyle === 'star-icon-big'){
      setStarStyle('');
    }
    else {
      setStarStyle('star-icon-big');
    }
    const storedUser = localStorage.getItem('user');
    
    if (storedUserName && storedPassword && storedUser) {
      const user: IUser = JSON.parse(storedUser);
      let userSaved = user.savedCardSets;
      if (!userSaved.includes(flashcardSet.id)) {
        userSaved.push(flashcardSet.id);
      }
      else {
        userSaved = userSaved.filter(el => el !== flashcardSet.id);
      }
      const data = {
        "ids": userSaved,
      };
      const axiosInstance = AxiosInstance(storedUserName, storedPassword)
      try {
        axiosInstance.post(`/cardset/user/${storedUserId}/saved`, data)
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const handleReverse = () => {
    const shuffledList = flashcardList.sort(() => Math.random() - 0.5);
    setFlashcardList(shuffledList);
    setCurrentIndex(0);
    setKey(prevKey => prevKey + 1);
  };
  


  return (
    <div className='container-container'>
      <NavigationBar location=''/>
      <div className='container-main-content'> 
        <div className='section-container'>
          <div className='section-header-container'>
            <div className='section-header-text'>
              {flashcardSet?.name}
            </div>
            <hr />
          </div>
        </div>
        <div className='card-container' key={key}>
          <Card flashcard={currentFlashcard}/>
        </div>
        <div className='card-navigation-container'>
          <div className='card-navigation-element'>
            <FaArrowRightArrowLeft onClick={() => handleReverse()}/>
          </div>
          <div className='arrows-container'>
            <div className='card-navigation-element'>
              <FaArrowAltCircleLeft onClick={() => handlePrevious()}/>
            </div>
            <div className='card-number'>
              {currentIndex + 1}/{flashcardList.length}
            </div>
            <div  className='card-navigation-element'>
              <FaArrowAltCircleRight onClick={() => handleNext()}/>
            </div>
          </div>
          <div className='card-navigation-element'>
            <FaRegStar className={starStyle} onClick={() => handleSave()} />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default DisplaySet