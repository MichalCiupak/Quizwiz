import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import './Login.css';
import quizIco from '../assets/quizwizico.png';
import Footer from '../components/Footer';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [isDataInvalid, setIsDataInvalid] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (email && password && userName) {
      const user = {
        "username": userName,
        "email": email,
        "password": password
      };
      try {
        const response = await axios.post('http://localhost:8080/api/v1/auth/register', user);
        console.log('Success:', response.data);
        setIsDataInvalid(false);
        navigate('/Login')
      } catch (error) {
        console.error('Error:', error);
        setIsDataInvalid(true);
      }
    }
    else {
      setIsDataInvalid(true);
    }
  };

  return (
    <div className='login-container'>
      <div className='login-content-container'>
        <div>
          <img src={quizIco} alt="Logo" className="logo-login"/>
          <div className='logo-label'>Quizwiz</div>
          <div className='login-label'>Sign Up</div>
          <div className='instruction-label'>Create new account and start preparing for your exams!</div>
        </div>
        <div className='login-form'>
          <form onSubmit={handleSubmit}>
            <div className='form-input'>
              <div className='form-input-label'><FontAwesomeIcon icon={faEnvelope} /> Email address  </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder='Enter your email'
              />
            </div>
            <div className='form-input'>
              <div className='form-input-label'><FontAwesomeIcon icon={faLock} /> Password  </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder='Enter your password'
              />
            </div>
            <div className='form-input'>
              <div className='form-input-label'><FontAwesomeIcon icon={faUser} /> Username  </div>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                placeholder='Enter your Username'
              />
            </div>
            {isDataInvalid ? (
              <div className='bad-data-hint'>Invalid data!</div>
            ) : (
              <div></div>
            )}
            <div className='button-container'>
              <div className="login-button" onClick={() => handleSubmit()}>Sign Up</div>
            </div>
            <hr />
            <div className='button-container'>
              <div className="new-account-button" onClick={() => navigate('/Login')}>I already have an account. Log in</div>
            </div>    
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Register