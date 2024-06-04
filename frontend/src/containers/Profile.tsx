import React, { useEffect, useState } from 'react'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import './Containers.css'
import { useFetcher, useNavigate } from 'react-router-dom';
import AxiosInstance from '../utils/AxiosInstance';
import { IUser } from '../utils/Interfaces';
import axios, { AxiosResponse } from 'axios';

const Profile = () => {
  const navigate = useNavigate();
  const storedUserName = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    if (storedPassword && storedUserName) {
      try {

        const axiosInstance = AxiosInstance(storedUserName, storedPassword)
             
        axiosInstance.get<IUser>('/user')
          .then((response: AxiosResponse<IUser>) => {
            const userData: IUser = response.data;
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
          <div className="new-cardset-button" onClick={() => navigate('/CreateSet')}>Create New Card Set!</div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Profile