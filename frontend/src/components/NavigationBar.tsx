import React, { useState } from 'react';
import './NavigationBar.css'
import quizIco from '../assets/quizwizico.png';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='navigation-container'>
      <div className='logo-container'>
        <img src={quizIco} alt="Logo" className="logo"/>
        <div className='logo-label'>Quizwiz</div>
      </div>
      <div className='browser-container'>
        <input
          type="text"
          placeholder="Look for flashcards!"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className='link-container'>
        <Link className='navigation-link' to={'/destination'}>Saved</Link>
        <Link className='navigation-link' to={'/destination'}>New Set</Link>
        <Link className='navigation-link' to={'/destination'}>Profile</Link>
        <Link className='navigation-link' to={'/destination'}>Log out</Link>
      </div>
    </div>
  )
}

export default NavigationBar