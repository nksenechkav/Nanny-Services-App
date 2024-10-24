// src/components/authNav/AuthNav.jsx

import { NavLink } from 'react-router-dom';
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

  function handleRegisterClick() {
    const content = {
      name, email, password
    };

    setModalRegisterContent(content);
    setIsModalRegisterOpen(true);
  }
  
  return (
    <div className={css['auth-navigation']}>
      <NavLink className={css['auth-link']} to="/login">
        <button className={css['auth-btn']} onClick={handleLoginClick}>Log in</button>
      </NavLink>
      <LoginForm
        isOpen={isModalLoginOpen}
        onRequestClose={() => setIsModalLoginOpen(false)}
        content={modalLoginContent}
      />
      <NavLink className={css['auth-link']} to="/register">
        <button className={css['auth-btn']} onClick={handleRegisterClick}>Registration</button>
      </NavLink>
      <RegistrationForm
        isOpen={isModalRegisterOpen}
        onRequestClose={() => setIsModalRegisterOpen(false)}
        content={modalRegisterContent}
      />
    </div>
  );
};
