import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import './Containers.css'

const NewSet = () => {
  return (
    <div className='container-container'>
      <NavigationBar location='newset'/>
      <div className='container-main-content'> 
        <div className='section-container'>
          <div className='section-header-container'>
            <div className='section-header-text'>
              Recenty Added
            </div>
            <hr />
            
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default NewSet