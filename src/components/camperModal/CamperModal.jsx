// src/components/camperModal/CamperModal.jsx

import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import { BsStarFill } from 'react-icons/bs';
import css from './CamperModal.module.scss';
import FeaturesTab from '../featuresTab/FeaturesTab';
import ReviewsTab from '../reviewsTab/ReviewsTab';
import BookingForm from '../bookingForm/BookingForm';

Modal.setAppElement('#root');

const CamperModal = ({ content, isOpen, onRequestClose }) => {
  const [activeTab, setActiveTab] = useState('features'); // За замовчуванням вкладка "features"

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      className={css['modal-content']}
      overlayClassName={css['modal-overlay']}
    >
      <div className={css['modal-content-inner']}>
        <div className={css['modal-window']}>
          <div className={css['header-wrapper']}>
            <div className={css['info-wrapper']}>
              <div className={css['name-wrapper']}>
                <p className={css.info}>{content.name}</p>
              </div>
              <ul className={css['info-location']}>
                <li className={css['wrapper-location']}>
                  <BsStarFill size={16} color="gold" />
                  <p className={css.info}>{content.rating}</p>
                  <p className={css['info-reviews']}>({content.reviews?.length || 0} Reviews)</p>
                </li>
                <li className={css['wrapper-location']}>
                  <svg className={css['my-icon']} width="16" height="16">
                    <use href="/icons.svg#icon-map-black"></use>
                  </svg>
                  <p className={css.info}>{content.location}</p>
                </li>
              </ul>
              <div className={css['price-wrapper']}>
                <p className={css.info}>{content.formattedPrice}</p>
              </div>
            </div>
            <button className={css['close-button']} onClick={onRequestClose}>
              <AiOutlineClose size={24} />
            </button>
          </div>

          <ul className={css['modal-images']}>
            {content.gallery?.slice(0, 3).map((imgSrc, index) => (
              <li key={index} className={css['image-wrapper']}>
                <img className={css['image']} src={imgSrc} alt={content.name} />
              </li>
            ))}
          </ul>
          <div className={css['modal-text']}>
              <div className={css['modal-element']}>
                <span>{content.description}</span>
              </div>
          </div>
          <div className={css['additionals']}>
              <ul className={css['nav-links']}>
                <li>
                  <button
                    className={`${css['nav-link']} ${activeTab === 'features' ? css['active'] : ''}`}
                    onClick={() => handleTabChange('features')}
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    className={`${css['nav-link']} ${activeTab === 'reviews' ? css['active'] : ''}`}
                    onClick={() => handleTabChange('reviews')}
                  >
                    Reviews
                  </button>
                </li>
              </ul>
            </div>
          <div className={css['modal-body']}>
            
            <div className={css['tab-content-wrapper']}>
              <div className={css['tab-content']}>
                {activeTab === 'features' && <FeaturesTab content={content} />}
                {activeTab === 'reviews' && <ReviewsTab reviews={content.reviews} />}
              </div>
            </div>
                <BookingForm />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CamperModal;
