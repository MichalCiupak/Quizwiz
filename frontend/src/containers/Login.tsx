import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import './Login.css';
import quizIco from '../assets/quizwizico.png';
import Footer from '../components/Footer';
import AxiosInstance from '../utils/AxiosInstance';

const Login = () => {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const [isDataInvalid, setIsDataInvalid] = useState<boolean>(false);

  const handleLogin = () => {
    if (userName && password) {

      try {

        const axiosInstance = AxiosInstance(userName, password);
             
        axiosInstance.get('/auth/login')
          .then(response => {
            console.log(response.data);
            setIsDataInvalid(false);
            localStorage.setItem('username', userName);
            localStorage.setItem('password', password);
            navigate('/Profile')
          })
          .catch(error => {
            console.error(error);
          });
        
      } catch (error) {
          console.error('Błąd:', error);
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
          <div className='login-label'>Log In</div>
          <div className='instruction-label'>Log in by entering your user name and password.</div>
        </div>
        <div className='login-form'>
          <form>
            <div className='form-input'>
              <div className='form-input-label'><FontAwesomeIcon icon={faUser} /> Username  </div>
              <input
                type="email"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
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
            {/* <div className='forgot-password-label'>Forgot your password?</div> */}
            {isDataInvalid ? (
              <div className='bad-data-hint'>Invalid data!</div>
            ) : (
              <div></div>
            )}
            <div className='button-container'>
              <div className="login-button"  onClick={() => handleLogin()}>Log in</div>
            </div>
            <hr />
            <div className='button-container'>
              <div className="new-account-button" onClick={() => navigate('/Register')}>New account</div>
            </div>
            
          </form>
        </div>
      </div>
      <Footer/>
    </div>

  )
}

export default Login