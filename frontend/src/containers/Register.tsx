import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import './Login.css';
import quizIco from '../assets/quizwizico.png';
import Footer from '../components/Footer';

const Register = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
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
          <img src={quizIco} alt="Logo" className="logo"/>
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
            <div className='button-container'>
              <div className="login-button">Sign Up</div>
            </div>
            <hr />
            <div className='button-container'>
              <div className="new-account-button" onClick={() => navigate('/')}>I already have an account. Log in</div>
            </div>
            
          </form>
        </div>
      </div>
      <Footer/>
    </div>

  )
}

export default Register