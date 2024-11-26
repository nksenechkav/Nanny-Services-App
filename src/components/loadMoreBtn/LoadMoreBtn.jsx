// src/components/loadMoreBtn/LoadMoreBtn.jsx

import css from './LoadMoreBtn.module.scss';

const LoadMoreBtn = ({onClick}) => {
  const handleClick = (event) => {
    onClick(); // Викликаємо передану функцію
    event.target.blur(); // Знімаємо фокус із кнопки
  };

  return (
    <div className={css["btn-container"]}>
      <button className={css.btn} onClick={handleClick}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;