// src/pages/HomePage/HomePage.jsx

import { Link } from 'react-router-dom';
import DocumentTitle from '../../components/DocumentTitle.jsx';
import css from './HomePage.module.scss';

export default function HomePage() {
  return (
    <>
      <DocumentTitle>Nanny Services</DocumentTitle>

      <div className={css.container}>
      <p className={css.subtitle}>
          Your adventure starts here! Explore our wide range of campers and find the perfect fit for your next journey.
        </p>
        {/* Контейнер для картинки та заголовка */}
        <div className={css.imageContainer}>
          {/* Назва з посиланням */}
          <Link to="/catalog" className={css.titleLink}>
            <h1 className={css.title}>
              TravelTrucks
            </h1>
          </Link>
          <img src="../../../camper.png" alt="camping trip" className={css.image} />
        </div>

      </div>
    </>
  );
}