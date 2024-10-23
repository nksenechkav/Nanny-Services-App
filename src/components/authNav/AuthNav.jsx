// src/components/authNav/AuthNav.jsx

import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.scss';
import { LoginForm } from '../loginForm/LoginForm';
import { useState } from 'react';

export const AuthNav = ( {name, email, password}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  function handleClick() {
    const content = {
      name, email, password
    };

    setModalContent(content);
    setIsModalOpen(true);
  }
  
  return (
    <div className={css['auth-navigation']}>
      <NavLink className={css['auth-link']} to="/login">
        <button className={css['auth-btn']} onClick={handleClick}>Log in</button>
      </NavLink>
      <LoginForm
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        content={modalContent}
      />
      <NavLink className={css['auth-link']} to="/register">
        <button className={css['auth-btn']} onClick={handleClick}>Registration</button>
      </NavLink>
    </div>
  );
};
