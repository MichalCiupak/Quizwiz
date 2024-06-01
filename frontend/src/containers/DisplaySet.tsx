import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import './Containers.css'
import Card from '../components/Card'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowRightArrowLeft, FaRegStar } from "react-icons/fa6";

const DisplaySet = () => {
  return (
    <div className='container-container'>
      <NavigationBar location=''/>
      <div className='container-main-content'> 
        <div className='section-container'>
          <div className='section-header-container'>
            <div className='section-header-text'>
              Set Name
            </div>
            <hr />
          </div>
        </div>
        <div className='card-container'>
          <Card/>
        </div>
        <div className='card-navigation-container'>
          <div className='card-navigation-element'>
            <FaArrowRightArrowLeft />
          </div>
          <div className='arrows-container'>
            <div className='card-navigation-element'>
              <FaArrowAltCircleLeft />
            </div>
            <div className='card-number'>
              1/12
            </div>
            <div className='card-navigation-element'>
              <FaArrowAltCircleRight/>
            </div>
          </div>
          <div className='card-navigation-element'>
            <FaRegStar />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default DisplaySet