// src/components/userMenu/UserMenu.jsx

import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import { FaUser } from 'react-icons/fa';
import css from './UserMenu.module.scss';
import { useNavigate } from 'react-router-dom';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    
    // Перенаправлення на домашню сторінку після розлогінування
    navigate('/');
  };

  return (
    <div className={css.wrapper}>
      <div className={css['icon-wrapper']}>
      < FaUser className={css.icon} size={24} />
      </div>
      <p className={css.username}>{user.name}</p>
      <button className={css.btn} type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};