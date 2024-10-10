// src/components/loadMoreBtn/LoadMoreBtn.jsx

import css from './LoadMoreBtn.module.scss';

const LoadMoreBtn = ({onClick}) => {
  return (
    <div className={css["btn-container"]}>
      <button className={css.btn} onClick={onClick}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;