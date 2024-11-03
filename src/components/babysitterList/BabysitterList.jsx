// src/components/babysitterList/BabysitterList.jsx

import css from "./BabysitterList.module.scss";
import { useState } from "react";
import LoadMoreBtn from "../loadMoreBtn/LoadMoreBtn.jsx";
import Babysitter from "../babysitter/babysitter.jsx";

const BabysitterList = ({ babysitters }) => {
  const [visibleItems, setVisibleItems] = useState(3);

  // Відображаємо тільки певну кількість кемперів
  const babysittersToShow = babysitters.slice(0, visibleItems);

  function handleLoadMore() {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
  }

  // Перевірка на наявність додаткових елементів для завантаження
  const hasMoreItems = visibleItems < babysitters.length;

  return (
    <>
      <ul className={css["babysitters-list"]}>
          {babysittersToShow.map(babysitter => (
            <li key={babysitter.id}>
              <Babysitter babysitter={babysitter} />
            </li>
          ))}
        
        {hasMoreItems && <LoadMoreBtn onClick={handleLoadMore} />}
      </ul>
    </>
  );
};

export default BabysitterList;
