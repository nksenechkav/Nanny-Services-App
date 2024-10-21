// src/components/navigation/Navigaton.jsx

import { NavLink } from 'react-router-dom';
import css from './Navigation.module.scss';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.navigation}>
      <NavLink className={css["link-header"]}to="/">
        Nanny.Services
      </NavLink>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/catalog">
        Nannies
      </NavLink>
      )}
      {isLoggedIn && (
         <NavLink className={css.link} to="/favorites">
         Favorites
       </NavLink>
      )}
    </nav>
  );
};
