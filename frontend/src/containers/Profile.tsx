import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'

const Profile = () => {
  return (
    <div className='profile-container'>
      <NavigationBar location='profile'/>
      <div className='profile-main-content'> 
        profile
      </div>
      <Footer/>
    </div>
  )
}

export default Profile