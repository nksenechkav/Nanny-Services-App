// src/components/babysitter/Babysitter.jsx

import css from "./Babysitter.module.scss";
// import { useNavigate } from 'react-router-dom';
import { BsStarFill } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { useEffect, useState } from "react";
import { addBabysitterToFavourites, deleteBabysitterFromFavourites, clearFavourites } from "../../redux/babysitters/slice.js";
import { fetchFavouritesFromFirebase, saveFavouritesToFirebase } from "../../redux/babysitters/operations.js";
import { useDispatch, useSelector } from "react-redux";
import { selectFavouritesBabysitters } from "../../redux/babysitters/selectors.js";
import { selectIsLoggedIn, selectUserId } from "../../redux/auth/selectors.js";
import { LoginForm } from "../loginForm/LoginForm.jsx";
import Reviews from "../reviews/Reviews.jsx";
import BookingForm from "../bookingForm/BookingForm.jsx";

const Babysitter = ( {babysitter: {id, name, price_per_hour, rating, location, birthday, experience, avatar_url, kids_age,
  about, reviews, characters, education}}, {email, password} ) => {

  const dispatch = useDispatch();
  const favouritesBabysitters = useSelector(selectFavouritesBabysitters) || [];
  const isFavourite = favouritesBabysitters.some(favBabysitter => favBabysitter.id === id);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userId = useSelector(selectUserId);

  const [isReviewsOpen, setIsReviewsOpen] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchFavouritesFromFirebase(userId));
    }  else {
      dispatch(clearFavourites());  // Очищення обраних елементів при LogOut
    }
  }, [isLoggedIn, userId, dispatch]);


  const handleFavouriteClick = () => {
      if (!isLoggedIn) {
        handleLoginClick();
        return;
      }
      if (isFavourite) {
        dispatch(deleteBabysitterFromFavourites(id));
      } else {
        dispatch(addBabysitterToFavourites(id));
      }
  
        dispatch(saveFavouritesToFirebase(userId));
    };
  
    const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
    const [modalLoginContent, setModalLoginContent] = useState({});
  
    function handleLoginClick() {
      const content = {
        email, password
      };
  
      setModalLoginContent(content);
      setIsModalLoginOpen(true);
    }

    const handleLoginSuccess = () => {
      setIsModalLoginOpen(false);
    };

    const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
    const [BookingFormContent, setBookingFormContent] = useState({});
  
    function handleBookingFormClick(event) {
      const content = {
       name, avatar_url
      };
  
      setBookingFormContent(content);
      setIsBookingFormOpen(true);
      event.target.blur(); // Знімаємо фокус із кнопки
    }

    const handleClick = () => {
      setIsReviewsOpen(true); 
    };
  
  const calculateAge = (birthDateString) => {
    const birthDate = new Date(birthDateString);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const age = calculateAge(birthday);

  return (
    <div className={css.item}>
      <div className={css["image-wrapper"]}> 
      <img className={css["image"]} src={avatar_url} alt={name} />
      <span className={css["circle"]}></span>
      </div>
      <div className={css["main-wrapper"]}>

      <div className={css["header-wrapper"]}> 

      <div className={css["info-name-wrapper"]}>
      <p className={css["info-span"]}>Nanny</p>
      <p className={css["info-name"]}>{name}</p>
      </div>
      
      <div className={css["info-header"]}>
      <div className={css["wrapper-info-header"]}>
      <BiMap size={16} color="black" />
      <p className={css.info}>{location}</p>
      </div>
      <div className={css["wrapper-info-header"]}>
      <BsStarFill size={16} color="gold" />
      <p className={css.info}>Rating: {rating}</p>
      </div>
      <div className={css["wrapper-info-header"]}>
      <p className={css.info}>Price/1 hour: <span>{price_per_hour}&#36;</span></p>
      </div>
      <button
              className={`${css["favourites-btn"]} ${isFavourite ? css["favourites-btn-active"] : ""}`}
              onClick={handleFavouriteClick}
            >
              {isFavourite ? (
                <AiFillHeart size={24} color="#0957C3" />
              ) : (
                <AiOutlineHeart size={24} color="black" />
              )}
      </button>
      </div>
      </div>
      <div className={css["info-services"]}>
      <div className={css["wrapper-services"]}>
       <span className={css["name-field"]}>Age:</span><p className={css["info-unique"]}>{age}</p>
      </div>
      <div className={css["wrapper-services"]}>
        <p className={css.info}><span className={css["name-field"]}>Experience:</span> {experience}</p>
      </div>
      <div className={css["wrapper-services"]}>
        <p className={css.info}><span className={css["name-field"]}>Kids Age:</span> {kids_age}</p>
      </div>
      <div className={css["wrapper-services"]}>
        <p className={css.info}><span className={css["name-field"]}>Characters:</span> {characters.join(', ')}</p>
      </div>
      <div className={css["wrapper-services"]}>
        <p className={css.info}><span className={css["name-field"]}>Education:</span> {education}</p>
      </div>
      </div>
      <p className={css["info-description"]}>{about}</p>
      {!isReviewsOpen && (
        <button className={css.btn} onClick={handleClick}>
          Read more
        </button>
      )}
      {isReviewsOpen && <Reviews reviews={reviews} />}
      {isReviewsOpen && (
        <button className={css["btn-booking"]} onClick={handleBookingFormClick}>
          Make an appointment
        </button>
      )}
      </div>
     <LoginForm
        isOpen={isModalLoginOpen}
        onRequestClose={() => setIsModalLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        content={modalLoginContent}
      />
      <BookingForm
        isOpen={isBookingFormOpen}
        onRequestClose={() => setIsBookingFormOpen(false)}
        content={BookingFormContent}
      />
      </div>
  );
};

export default Babysitter;