// src/components/authNav/AuthNav.jsx

// import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.scss';
import { LoginForm } from '../loginForm/LoginForm';
import { useState } from 'react';
import { RegistrationForm } from '../registrationForm/RegistrationForm';

export const AuthNav = ( {name, email, password}) => {
  const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);
  const [modalRegisterContent, setModalRegisterContent] = useState({});
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
  const [modalLoginContent, setModalLoginContent] = useState({});

  function handleLoginClick() {
    const content = {
      email, password
    };

    setModalLoginContent(content);
    setIsModalLoginOpen(true);
  }
  
  const handleLoginSuccess = () => {
    setIsModalLoginOpen(false);
  };
  

  function handleRegisterClick() {
    const content = {
      name, email, password
    };

    setModalRegisterContent(content);
    setIsModalRegisterOpen(true);
  }
  
  return (
    <div className={css['auth-navigation']}>
        <button className={css['auth-btn']} onClick={handleLoginClick}>Log in</button>
      <LoginForm
        isOpen={isModalLoginOpen}
        onRequestClose={() => setIsModalLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        content={modalLoginContent}
      />
        <button className={css['auth-btn']} onClick={handleRegisterClick}>Registration</button>
      <RegistrationForm
        isOpen={isModalRegisterOpen}
        onRequestClose={() => setIsModalRegisterOpen(false)}
        content={modalRegisterContent}
      />
    </div>
  );
};
