// src/pages/HomePage/HomePage.jsx

import { Link } from 'react-router-dom';
import { MdOutlineArrowOutward, MdCheck } from "react-icons/md";
import DocumentTitle from '../../components/DocumentTitle.jsx';
import { useSelector } from 'react-redux'; 
import { selectBabysitters } from '../../redux/babysitters/selectors';
import css from './HomePage.module.scss';

export default function HomePage() {
  const babysitters = useSelector(selectBabysitters); 
  const babysitterCount = babysitters.length; 
  return (
    <>
      <DocumentTitle>Nanny Services</DocumentTitle>

      <div className={css.container}>
        <div className={css["title-container"]}>
          <h1 className={css.title}>
            Make Life Easier for the Family:
          </h1>
          <p className={css.subtitle}>
            Find Babysitters Online for All Occasions
          </p>
          <Link to="/catalog" className={css.btn}>
            <p className={css.text}>Get started</p>
            <MdOutlineArrowOutward className={css.icon} size={18} />
          </Link>
        </div>
        <div className={css["image-container"]}>
          <img src="../../../home-image.png" alt="home" className={css.image} />
          <div className={css["info-box"]}>
            <div className={css["info-amount"]}>
                <div className={css["info-icon"]}>
                  <MdCheck size={24} />
                </div>
                <div className={css["info"]}>
                <p className={css["info-text"]}>Experienced nannies</p>
                <p className={css["info-number"]}>{babysitterCount}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
