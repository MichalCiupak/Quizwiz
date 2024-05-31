import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'

const NewSet = () => {
  return (
    <div className='newset-container'>
      <NavigationBar location='newset'/>
      <div className='newset-main-content'>
        newset
      </div>
      <Footer/>
    </div>
  )
}

export default NewSet