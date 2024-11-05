// src/components/navigation/Navigaton.jsx

import { NavLink } from 'react-router-dom';
import css from './Navigation.module.scss';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.navigation}>
      <NavLink className={css["link-header"]} to="/">
        Nanny.Services
      </NavLink>
      <div className={css["link-menu"]}>
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
      </div>
    </nav>
  );
};
