import './Containers.css'
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import './Containers.css'
import { useFetcher, useNavigate } from 'react-router-dom';
import AxiosInstance from '../utils/AxiosInstance';
import { IUser } from '../utils/Interfaces';
import axios, { AxiosResponse } from 'axios';
import { IFlashcardSet, IFlashcard } from '../utils/Interfaces';
import CardTile from '../components/CardTile';

const SearchSet = () => {
  const { searchPhrase } = useParams();
  const [userSets, setUserSets] = useState<IFlashcardSet[]>();


  useEffect(() => {
    const storedFlashcardSets = localStorage.getItem('flashcardSets');
    if (storedFlashcardSets && searchPhrase) {
      const parsedFlashcardSets: IFlashcardSet[] = JSON.parse(storedFlashcardSets);
      const filteredFlashcardSets = parsedFlashcardSets.filter(flashcardSet => flashcardSet.name.includes(searchPhrase));
      setUserSets(filteredFlashcardSets);
    }
  }, [searchPhrase]);


  const removeFlashcardSet = (id: string) => {
    setUserSets(userSets => userSets?.filter(set => set.id !== id));
  };

  return (
    <div className='container-container'>
      <NavigationBar location=''/>
      <div className='container-main-content'> 
        <div className='section-container'>
          <div className='section-header-container'>
            <div className='section-header-text'>
              Results for "{searchPhrase}"
            </div>
            <hr />
            
          </div>
          <div className='section-cardset-container'>

            {userSets?.map((flashcard: IFlashcardSet, index: number) => (
              <CardTile cardSet={flashcard} key={index} onRefresh={removeFlashcardSet}/>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
export default SearchSet