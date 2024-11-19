// src/components/navigation/Navigaton.jsx

import { NavLink } from 'react-router-dom';
import css from './Navigation.module.scss';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.navigation}>
        <NavLink
          className={css.link}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? `${css.link} ${css.active}` : css.link)}
          to="/catalog"
        >
          Nannies
        </NavLink>
        {isLoggedIn && (
          <NavLink
            className={({ isActive }) => (isActive ? `${css.link} ${css.active}` : css.link)}
            to="/favourites"
          >
            Favourites
          </NavLink>
        )}
    </nav>
  );
};
