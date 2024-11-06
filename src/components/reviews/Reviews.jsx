// src/components/reviews/Reviews.jsx

import { BsStarFill } from 'react-icons/bs';
import css from './Reviews.module.scss';

const Reviews = ({ reviews }) => {
  return (
    <ul className={css['reviews']}>
      {reviews?.map((review, index) => (
        <li key={index} className={css['review-item']}>
          <div className={css['review-main']}>
              <div className={css['reviewer-icon']}>
                <p className={css['initial']}>{review.reviewer[0]}</p>
              </div>
              <div className={css['reviewer-info']}>
                <p className={css['reviewer-name']}>{review.reviewer}</p>
                <div className={css['reviewer-rating']}>
                <BsStarFill size={16} color="gold" />
                <p className={css['reviewer-rating-text']}>{review.rating}</p>
                </div>
              </div>
          </div>
          <p className={css['reviewer-comment']}>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
