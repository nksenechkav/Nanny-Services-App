// src/components/reviewsTab/ReviewsTab.jsx

import { BsStarFill } from 'react-icons/bs';
import css from './ReviewsTab.module.scss';

const ReviewsTab = ({ reviews }) => {
  return (
    <div className={css['reviews']}>
      {reviews?.map((review, index) => (
        <div key={index} className={css['review-item']}>
          <div className={css['reviewer-icon']}>
            <h1 className={css['initial']}>{review.reviewer_name[0]}</h1>
          </div>
          <div className={css['reviewer-info']}>
            <p className={css['reviewer-name']}>{review.reviewer_name}</p>
            <div className={css['reviewer-rating']}>
              {[...Array(5)].map((_, i) => (
                <BsStarFill
                  key={i}
                  size={16}
                  color={i < review.reviewer_rating ? '#FFC531' : '#F2F4F7'}
                />
              ))}
            </div>
          </div>
          <p className={css['reviewer-comment']}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewsTab;
