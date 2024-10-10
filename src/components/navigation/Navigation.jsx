// src/components/navigation/Navigaton.jsx

import { NavLink } from 'react-router-dom';
import css from './Navigation.module.scss';

export const Navigation = () => {

  return (
    <nav className={css.navigation}>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      <NavLink className={css.link} to="/catalog">
        Catalog
      </NavLink>
      <NavLink className={css.link} to="/favorites">
        Favorites
      </NavLink>
    </nav>
  );
};
