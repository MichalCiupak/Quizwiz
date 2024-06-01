import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import './Containers.css'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
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
            
          </div>
        </div>
        <div className='button-container'>
          <div className="new-cardset-button" onClick={() => navigate('/Newset')}>Create New Card Set!</div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Profile