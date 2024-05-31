import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './Login.css';
import quizIco from '../assets/quizwizico.png';
import Footer from '../components/Footer';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/');
  };


  return (
    <div className='login-container'>
      <div className='login-content-container'>
        <div>
          <img src={quizIco} alt="Logo" className="logo-login"/>
          <div className='logo-label'>Quizwiz</div>
          <div className='login-label'>Log In</div>
          <div className='instruction-label'>Log in by entering your email address and password.</div>
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
            <div className='forgot-password-label'>Forgot your password?</div>
            <div className='button-container'>
              <div className="login-button">Log in</div>
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