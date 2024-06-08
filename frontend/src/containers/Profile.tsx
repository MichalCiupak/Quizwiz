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

const Profile = () => {
  const navigate = useNavigate();
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
        axiosInstance.get<IFlashcardSet[]>(`/cardset/user/${user.id}/owned`)
          .then((response: AxiosResponse<IFlashcardSet[]>) => {
            const userset: IFlashcardSet[] = response.data;
            setUserSets(userset);
            localStorage.setItem('flashcardSets', JSON.stringify(userset));
            localStorage.setItem('user', JSON.stringify(user));
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
      <NavigationBar location='profile'/>
      <div className='container-main-content'> 
        <div className='section-container'>
          <div className='section-header-container'>
            <div className='section-header-text'>
              My Cards Sets
            </div>
            <hr />
          </div>
          <div className='section-cardset-container'>
            {userSets?.map((flashcard: IFlashcardSet, index: number) => (
              <CardTile cardSet={flashcard} key={index} onRefresh={removeFlashcardSet}/>
            ))}
          </div>
        </div>
        <div className='section-container'>
          <div className='section-header-container'>
            <div className='section-header-text'>
              My Profile Data
            </div>
            <hr />
            <div className='profile-attributes-container'>
              <div className='profile-attribute'>
                <div className='profile-attribute-name'>
                  Email
                </div>
                <div className='profile-attribute-value'>
                {user?.email}
                </div>
              </div>
              <div className='profile-attribute'>
                <div className='profile-attribute-name'>
                  Username
                </div>
                <div className='profile-attribute-value'>
                  {user?.username}
                </div>
              </div>
            </div>
            <hr/>
          </div>
        </div>
        <div className='button-container'>
          <div className="new-cardset-button" onClick={() => navigate('/NewSet')}>Create New Card Set!</div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Profile