import css from './NotFoundPage.module.scss';
import { NavLink } from "react-router-dom";
import DocumentTitle from '../../components/DocumentTitle.jsx';

const NotFoundPage = () => {
    
    return (
        <div className={css['notFoundPage-container']}>
            <DocumentTitle>Not-Found-Page</DocumentTitle>
            <div className={css["notFoundPage-header"]}>
            </div>
            <div className={css["notFoundPage-main"]}>
            <p className={css["notFoundPage-text"]}>Not found page</p>
             <NavLink to="/">
             <button className={css.btn}> Go back</button>
             </NavLink>
            </div>       
        </div>
    );
    
  }
  
  export default NotFoundPage;