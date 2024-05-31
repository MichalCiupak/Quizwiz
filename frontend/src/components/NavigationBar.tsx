import React, { useState } from 'react';
import './NavigationBar.css'
import quizIco from '../assets/quizwizico.png';
import { Link } from 'react-router-dom';

type Props = {
  location: string;
}

const NavigationBar: React.FC<Props> = ({location}) => {
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
        <Link className='navigation-link' to={'/Saved'}  style={{ color: location === 'saved' ? '#AF3A11' : '#FFA382' }}>Saved</Link>
        <Link className='navigation-link' to={'/NewSet'} style={{ color: location === 'newset' ? '#AF3A11' : '#FFA382' }}>New Set</Link>
        <Link className='navigation-link' to={'/Profile'} style={{ color: location === 'profile' ? '#AF3A11' : '#FFA382' }}>Profile</Link>
        <Link className='navigation-link' to={'/Login'}>Log out</Link>
      </div>
    </div>
  )
}

export default NavigationBar