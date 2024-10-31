// src/components/camper/Camper.jsx

import css from "./Babysitter.module.scss";
import { BsStarFill } from "react-icons/bs";
// import CamperModal from '../camperModal/CamperModal.jsx';
// import { useState } from "react";
import { addBabysitterToFavourites, deleteBabysitterFromFavourites } from "../../redux/babysitters/slice.js";
import { useDispatch, useSelector } from "react-redux";
import { selectFavouritesBabysitters } from "../../redux/babysitters/selectors.js";

const Babysitter = ( {babysitter: {index, name, price_per_hour, rating, location, birthday, experience, avatar_url, kids_age,
  about, reviews, characters, education}} ) => {

  const dispatch = useDispatch();
  const favouritesBabysitters = useSelector(selectFavouritesBabysitters) || [];
  const isFavourite = favouritesBabysitters.some(favBabysitter => favBabysitter.index === index);

  const handleFavouriteClick = () => {
    if (isFavourite) {
      dispatch(deleteBabysitterFromFavourites(index));
    } else {
      dispatch(addBabysitterToFavourites(index));
    }
  };

  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [modalContent, setModalContent] = useState({});

  // function handleClick() {
  //   const content = {
  //     index, name, price_per_hour, rating, location, birthday, experience, avatar_url, kids_age, about, reviews, characters, education
  //   };

  // //   setModalContent(content);
  // //   setIsModalOpen(true);

  // }
  

  return (
    <div className={css.item}>
      <div className={css["image-wrapper"]}> 
      <img className={css["image"]} src={avatar_url} alt={name} />
      </div>
      <div className={css["info-wrapper"]}> 
      <div className={css["info-header"]}>
      <p className={css.info}>{name}</p>
      <div className={css["wrapper-header"]}>
      <p className={css.info}>price/1 hour {price_per_hour}&#36;</p>
      <button
              className={`${css["favourites-btn"]} ${isFavourite ? css["favourites-btn-active"] : ""}`}
              onClick={handleFavouriteClick}
            >
              <svg className={`${css["my-icon"]} ${isFavourite ? css["my-icon-active"] : ""}`} width="24" height="24">
                <use href={isFavourite ? "/icons.svg#icon-heart-red" : "/icons.svg#icon-heart-black"}></use>
              </svg>
      </button>
      </div>
      </div>
      <div className={css["info-location"]}>
      <div className={css["wrapper-location"]}>
      <BsStarFill size={16} color="gold" />
      <p className={css.info}>{rating}</p>
      <p className={css["info-reviews"]}>({reviews.length} Reviews)</p>
      </div>
      <div className={css["wrapper-location"]}>
      <svg className={css["my-icon"]} width="16" height="16"><use href="/icons.svg#icon-map-black"></use></svg>
      <p className={css.info}>{location}</p>
      </div>
      </div>
      <p className={css["info-description"]}>{about}</p>
      <div className={css["info-services"]}>
      <div className={css["wrapper-services"]}>
        <svg className={css["my-icon-unique"]} width="20" height="20"><use href="/icons.svg#icon-users"></use></svg>
        <p className={css.info}>age:{birthday}</p>
      </div>
      <div className={css["wrapper-services"]}>
        <svg className={css["my-icon"]} width="20" height="20"><use href="/icons.svg#icon-automatic"></use></svg>
        <p className={css.info}>experience: {experience}</p>
      </div>
      <div className={css["wrapper-services"]}>
        <svg className={css["my-icon-unique"]} width="20" height="20"><use href="/icons.svg#icon-petrol"></use></svg>
        <p className={css.info}>kids age:{kids_age}</p>
      </div>
      <div className={css["wrapper-services"]}>
        <svg className={css["my-icon"]} width="20" height="20"><use href="/icons.svg#icon-kitchen"></use></svg>
        <p className={css.info}>characters:{characters}</p>
      </div>
      <div className={css["wrapper-services"]}>
        <svg className={css["my-icon"]} width="20" height="20"><use href="/icons.svg#icon-beds"></use></svg>
        <p className={css.info}>education:{education}</p>
      </div>
      </div>
      {/* <button className={css.btn} onClick={handleClick}>
        Show more
      </button> */}
      </div>
     {/* <CamperModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        content={modalContent}
      /> */}
    </div>
  );
};

export default Babysitter;