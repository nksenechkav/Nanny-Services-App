// src/components/camper/Camper.jsx

import css from "./Camper.module.scss";
import { BsStarFill } from "react-icons/bs";
import CamperModal from '../../components/camperModal/CamperModal.jsx';
import { useState } from "react";
import { addCamperToFavourites, deleteCamperFromFavourites } from "../../redux/campers/slice.js";
import { useDispatch, useSelector } from "react-redux";
import { selectFavouritesCampers } from "../../redux/campers/selectors.js";

const Camper = ( {camper: {_id, name, price, rating, location, adults, engine, transmission, form, length, width, height, tank, consumption, description, details: {kitchen, beds, airConditioner, CD, radio, bathroom, TV, shower, toilet, freezer, hob, microwave, gas, water}, gallery, reviews }} ) => {

  const dispatch = useDispatch();
  const favouritesCampers = useSelector(selectFavouritesCampers) || [];
  const isFavourite = favouritesCampers.some(favCamper => favCamper._id === _id);

  const handleFavouriteClick = () => {
    if (isFavourite) {
      dispatch(deleteCamperFromFavourites(_id));
    } else {
      dispatch(addCamperToFavourites(_id));
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  function handleClick() {
    const content = {
      name, gallery, adults, engine, transmission, description, rating, reviews, location, kitchen, beds, airConditioner,CD, radio, bathroom, TV, shower, toilet, freezer, hob, microwave, gas, water, formattedPrice, form, length, width, height, tank, consumption
    };

    setModalContent(content);
    setIsModalOpen(true);
  }
  
  const formattedPrice = `€${price.toFixed(2)}`;

  return (
    <div className={css.item}>
      <div className={css["image-wrapper"]}> 
      <img className={css["image"]} src={gallery[0]} alt={name} />
      </div>
      <div className={css["info-wrapper"]}> 
      <div className={css["info-header"]}>
      <p className={css.info}>{name}</p>
      <div className={css["wrapper-header"]}>
      <p className={css.info}>{formattedPrice}</p>
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
      <p className={css["info-description"]}>{description}</p>
      <div className={css["info-services"]}>
      <div className={css["wrapper-services"]}>
        <svg className={css["my-icon-unique"]} width="20" height="20"><use href="/icons.svg#icon-users"></use></svg>
        <p className={css.info}>{adults} adults</p>
      </div>
      <div className={css["wrapper-services"]}>
        <svg className={css["my-icon"]} width="20" height="20"><use href="/icons.svg#icon-automatic"></use></svg>
        <p className={css.info}>{transmission}</p>
      </div>
      <div className={css["wrapper-services"]}>
        <svg className={css["my-icon-unique"]} width="20" height="20"><use href="/icons.svg#icon-petrol"></use></svg>
        <p className={css.info}>{engine}</p>
      </div>
      <div className={css["wrapper-services"]}>
        <svg className={css["my-icon"]} width="20" height="20"><use href="/icons.svg#icon-kitchen"></use></svg>
        <p className={css.info}>{kitchen} kitchen</p>
      </div>
      <div className={css["wrapper-services"]}>
        <svg className={css["my-icon"]} width="20" height="20"><use href="/icons.svg#icon-beds"></use></svg>
        <p className={css.info}>{beds} beds</p>
      </div>
      <div className={css["wrapper-services"]}>
        <svg className={css["my-icon"]} width="20" height="20"><use href="/icons.svg#icon-AC"></use></svg>
        <p className={css.info}>{airConditioner} AC</p>
      </div>
      </div>
      <button className={css.btn} onClick={handleClick}>
        Show more
      </button>
      </div>
     <CamperModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        content={modalContent}
      />
    </div>
  );
};

export default Camper;