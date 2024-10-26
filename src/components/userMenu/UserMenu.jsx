// src/components/userMenu/UserMenu.jsx

import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import { FaUser } from 'react-icons/fa';
import css from './UserMenu.module.scss';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <div className={css['icon-wrapper']}>
      < FaUser className={css.icon} size={24} />
      </div>
      <p className={css.username}>{user.name}</p>
      <button className={css.btn} type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};