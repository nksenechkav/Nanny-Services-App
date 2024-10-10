// src/components/appBar/AppBar.jsx

import { Navigation } from '../navigation/Navigation.jsx';
import css from './AppBar.module.scss';

export const AppBar = () => {

  return (
    <header className={css.header}>
      <Navigation className={css.navigation}/>
    </header>
  );
};
