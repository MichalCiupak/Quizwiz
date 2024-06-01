import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import './Containers.css'
import { useParams } from 'react-router-dom';

const SearchSet = () => {
  const { searchPhrase } = useParams();
  return (
    <div className='container-container'>
      <NavigationBar location=''/>
      <div className='container-main-content'> 
        <div className='section-container'>
          <div className='section-header-container'>
            <div className='section-header-text'>
              Results for "{searchPhrase}"
            </div>
            <hr />
            
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default SearchSet