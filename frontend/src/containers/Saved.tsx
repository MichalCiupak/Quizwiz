import React, { useEffect, useState } from 'react'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import './Containers.css'
import { useNavigate } from 'react-router-dom';
import AxiosInstance from '../utils/AxiosInstance';
import { IUser } from '../utils/Interfaces';
import { AxiosResponse } from 'axios';
import { IFlashcardSet } from '../utils/Interfaces';
import CardTile from '../components/CardTile';

const Saved = () => {
  const storedUserName = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');
  const [user, setUser] = useState<IUser>();
  const [userSets, setUserSets] = useState<IFlashcardSet[]>();

  useEffect(() => {
    if (storedPassword && storedUserName) {
      const axiosInstance = AxiosInstance(storedUserName, storedPassword)
      try {
        axiosInstance.get<IUser>('/user')
          .then((response: AxiosResponse<IUser>) => {
            const userData: IUser = response.data;
            localStorage.setItem('userId', userData.id);
            setUser(userData);
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      } catch (error) {
          console.error('Błąd:', error);
      }
    }
  }, []);

  const fetchUserSets = async () => {
    if (user?.id && storedPassword && storedUserName) {
      const axiosInstance = AxiosInstance(storedUserName, storedPassword)
      try {         
        axiosInstance.get<IFlashcardSet[]>(`/cardset/user/${user.id}/saved`)
          .then((response: AxiosResponse<IFlashcardSet[]>) => {
            const userset: IFlashcardSet[] = response.data;
            setUserSets(userset);
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      } catch (error) {
          console.error('Błąd:', error);
      }
    }
  };

  useEffect(() => {
    fetchUserSets();
  }, [user]);

  const removeFlashcardSet = (id: string) => {
    setUserSets(userSets => userSets?.filter(set => set.id !== id));
  };

  return (
    <div className='container-container'>
      <NavigationBar location='saved'/>
      <div className='container-main-content'> 
        <div className='section-container'>
          <div className='section-header-container'>
            <div className='section-header-text'>
              Saved Sets
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

export default Saved