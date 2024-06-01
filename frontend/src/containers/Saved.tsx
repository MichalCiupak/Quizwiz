import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import './Containers.css'

const Saved = () => {
  return (
    <div className='container-container'>
      <NavigationBar location='saved'/>
      <div className='container-main-content'> 
        <div className='section-container'>
          <div className='section-header-container'>
            <div className='section-header-text'>
              Saved sets
            </div>
            <hr />
            
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Saved