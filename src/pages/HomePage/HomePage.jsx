// src/pages/HomePage/HomePage.jsx

import { Link } from 'react-router-dom';
import { MdOutlineArrowOutward } from "react-icons/md";
import DocumentTitle from '../../components/DocumentTitle.jsx';
import css from './HomePage.module.scss';

export default function HomePage() {
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
          <button className={css.btn}>
            <p className={css.text}>Get started </p>
            <Link to="/catalog" className={css.titleLink}>
            <MdOutlineArrowOutward size={18} color="white"/>
            </Link>
          </button>
          </div>
          <div className={css["image-container"]}>
          <img src="../../../home-image.png" alt="home-image" className={css.image} />
          </div>
      </div>
    </>
  );
}