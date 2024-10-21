import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.scss';

export const AuthNav = () => {
  return (
    <div className={css["auth-navigation"]}>
      <NavLink className={css["auth-link"]} to="/login">
      <button className= {css["auth-btn"]}>Log in</button> 
      </NavLink>
      <NavLink className={css["auth-link"]} to="/register">
      <button className= {css["auth-btn"]}>Registration</button> 
      </NavLink>
    </div>
  );
};