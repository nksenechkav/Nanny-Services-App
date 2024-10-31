// src/components/camperList/BabysitterList.jsx

import Babysitter from "../babysitter/Babysitter.jsx";
import css from "./BabysitterList.module.scss";
import { useState } from "react";
import LoadMoreBtn from "../loadMoreBtn/LoadMoreBtn.jsx";

const BabysitterList = ({ babysitters }) => {
  const [visibleItems, setVisibleItems] = useState(3);
  console.log(babysitters);

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
        {babysittersToShow.map((babysitter, index) => (
          <li key={index}> {/* Using index as key */}
            <Babysitter babysitter={babysitter} /> {/* Passing individual babysitter object */}
          </li>
        ))}
        {hasMoreItems && <LoadMoreBtn onClick={handleLoadMore} />}
      </ul>
    </>
  );
};

export default BabysitterList;
