import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import './Saved.css'

const Saved = () => {
  return (
    <div className='saved-container'>
      <NavigationBar location='saved'/>
      <div className='saved-main-content'>
        saved
      </div>
      <Footer/>
    </div>
  )
}

export default Saved