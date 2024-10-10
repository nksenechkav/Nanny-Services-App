import css from './NotFoundPage.module.scss';
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
    
    return (
        <div className={css['notFoundPage-container']}>
             <h2>Not found page</h2>
             <NavLink to="/">
             <button className={css.btn}> Go back</button>
             </NavLink>
        </div>
    );
    
  }
  
  export default NotFoundPage;