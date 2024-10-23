// src/components/appBar/AppBar.jsx

import { useSelector } from 'react-redux';
import { AuthNav } from '../authNav/AuthNav.jsx';
import { Navigation } from '../navigation/Navigation.jsx';
import { UserMenu } from '../userMenu/UserMenu.jsx';
import css from './AppBar.module.scss';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation className={css.navigation} />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
