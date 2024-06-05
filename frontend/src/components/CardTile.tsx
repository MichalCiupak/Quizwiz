import React from 'react'
import './CardTile.css'
import { IFlashcardSet, IUser } from '../utils/Interfaces'
import { FaTrashCan, FaRegStar } from "react-icons/fa6";
import AxiosInstance from '../utils/AxiosInstance';
import { useFetcher, useNavigate } from 'react-router-dom';
import { AiFillEdit } from "react-icons/ai";


type Props = {
  cardSet: IFlashcardSet;
  onRefresh: (id: string) => void;
}



const CardTile: React.FC<Props> = ({cardSet, onRefresh}) => {
  const storedUserName = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');
  const storedUserId = localStorage.getItem('userId');
  const navigate = useNavigate();

  const handleDisplay = () => {
    console.log(cardSet)
    navigate('/Set', { state: { cardSet } });
  };

  const handleDelete = () => {
    if (storedPassword && storedUserName) {
      const axiosInstance = AxiosInstance(storedUserName, storedPassword)
      try {
        axiosInstance.delete(`cardset/${cardSet.id}`)
          .then(response => {
            console.log(response.data);
            onRefresh(cardSet.id);
          })
          .catch(error => {
            console.error(error);
          });
        
      } catch (error) {
          console.error('Błąd:', error);
      }
    }
  };

  const handleSave = () => {
    console.log("handle")
    const storedUser = localStorage.getItem('user');
    
    if (storedUserName && storedPassword && storedUser) {
      const user: IUser = JSON.parse(storedUser);
      let userSaved = user.savedCardSets;
      if (!userSaved.includes(cardSet.id)) {
        userSaved.push(cardSet.id);
      }
      else {
        userSaved = userSaved.filter(el => el !== cardSet.id);
      }
      const data = {
        "ids": userSaved,
      };
      console.log("savethis")
      console.log(data)
      const axiosInstance = AxiosInstance(storedUserName, storedPassword)
      try {
        axiosInstance.post(`/cardset/user/${storedUserId}/saved`, data)
          .then(response => {
            console.log("hddd")
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

  const handleEdit = () => {
    localStorage.setItem('flashcardToEdit', JSON.stringify(cardSet));
    navigate('/NewSet')
  };


  return (
    <div className='cardtile-container'>
      <div className='cardtile-main-content'>
        <div  onClick={() => handleDisplay()} className='cardtile-name'>
          {cardSet.name}
        </div>
        <div className='cardtile-icons-container'> 
          <FaTrashCan className='bin-icon' onClick={() => handleDelete()}/>
          <FaRegStar className='bin-icon' onClick={() => handleSave()}/>
          <AiFillEdit className='bin-icon' onClick={() => handleEdit()}/>
        </div>
      </div>
    </div>
  )
}

export default CardTile