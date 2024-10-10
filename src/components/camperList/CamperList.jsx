// src/components/camperList/CamperList.jsx

import Camper from "../camper/Camper.jsx";
import css from "./CamperList.module.scss";
import { useState } from "react";
import LoadMoreBtn from "../loadMoreBtn/LoadMoreBtn.jsx";

const CamperList = ({ campers }) => {
  const [visibleItems, setVisibleItems] = useState(4);

  // Відображаємо тільки певну кількість кемперів
  const campersToShow = campers.slice(0, visibleItems);

  function handleLoadMore() {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
  }

  // Перевірка на наявність додаткових елементів для завантаження
  const hasMoreItems = visibleItems < campers.length;

  return (
    <>
      <ul className={css["camper-list"]}>
        {campersToShow.map((camper) => (
          <li key={camper._id}>
            <Camper camper={camper} />
          </li>
        ))}
        {hasMoreItems && <LoadMoreBtn onClick={handleLoadMore} />}
      </ul>
    </>
  );
};

export default CamperList;
