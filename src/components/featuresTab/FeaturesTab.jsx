// src/components/FeaturesTab/FeaturesTab.jsx

import css from './FeaturesTab.module.scss';

const FeaturesTab = ({ content }) => {
  return (
    <div className={css['features']}>
      <ul className={css["info-services"]}>
        {content.adults > 0 && (
          <li className={css["wrapper-services"]}>
            <svg className={css["my-icon-unique"]} width="20" height="20">
              <use href="/icons.svg#icon-users"></use>
            </svg>
            <p className={css.info}>{content.adults} adults</p>
          </li>
        )}
        {content.transmission && (
          <li className={css["wrapper-services"]}>
            <svg className={css["my-icon"]} width="20" height="20">
              <use href="/icons.svg#icon-automatic"></use>
            </svg>
            <p className={css.info}>{content.transmission}</p>
          </li>
        )}
        {content.airConditioner > 0 && (
          <li className={css["wrapper-services"]}>
            <svg className={css["my-icon"]} width="20" height="20">
              <use href="/icons.svg#icon-AC"></use>
            </svg>
            <p className={css.info}>{content.airConditioner} AC</p>
          </li>
        )}
        {content.engine && (
          <li className={css["wrapper-services"]}>
            <svg className={css["my-icon-unique"]} width="20" height="20">
              <use href="/icons.svg#icon-petrol"></use>
            </svg>
            <p className={css.info}>{content.engine}</p>
          </li>
        )}
        {content.kitchen > 0 && (
          <li className={css["wrapper-services"]}>
            <svg className={css["my-icon"]} width="20" height="20">
              <use href="/icons.svg#icon-kitchen"></use>
            </svg>
            <p className={css.info}>{content.kitchen} kitchen</p>
          </li>
        )}
        {content.beds > 0 && (
          <li className={css["wrapper-services"]}>
            <svg className={css["my-icon"]} width="20" height="20">
              <use href="/icons.svg#icon-beds"></use>
            </svg>
            <p className={css.info}>{content.beds} beds</p>
          </li>
        )}
        {content.airConditioner > 0 && (
          <li className={css["wrapper-services"]}>
            <svg className={css["my-icon"]} width="20" height="20">
              <use href="/icons.svg#icon-air-conditioner"></use>
            </svg>
            <p className={css.info}>{content.airConditioner} air conditioner</p>
          </li>
        )}
        {content.CD > 0 && (
          <li className={css["wrapper-services"]}>
            <svg className={css["my-icon"]} width="20" height="20">
              <use href="/icons.svg#icon-CD"></use>
            </svg>
            <p className={css.info}>{content.CD} CD</p>
          </li>
        )}
        {content.radio > 0 && (
          <li className={css["wrapper-services"]}>
            <svg className={css["my-icon"]} width="20" height="20">
              <use href="/icons.svg#icon-radio"></use>
            </svg>
            <p className={css.info}>{content.radio} radio</p>
          </li>
        )}
        {content.TV > 0 && (
          <li className={css["wrapper-services"]}>
            <svg className={css["my-icon"]} width="20" height="20">
              <use href="/icons.svg#icon-TV"></use>
            </svg>
            <p className={css.info}>{content.TV} TV</p>
          </li>
        )}
        {content.shower > 0 && (
          <li className={css["wrapper-services"]}>
            <svg className={css["my-icon"]} width="20" height="20">
              <use href="/icons.svg#icon-shower"></use>
            </svg>
            <p className={css.info}>{content.shower} shower</p>
          </li>
        )}
        {content.toilet > 0 && (
          <li className={css["wrapper-services"]}>
            <svg className={css["my-icon-unique"]} width="20" height="20">
              <use href="/icons.svg#icon-toilet"></use>
            </svg>
            <p className={css.info}>{content.toilet} toilet</p>
          </li>
        )}
        {content.freezer > 0 && (
          <li className={css["wrapper-services"]}>
            <svg className={css["my-icon"]} width="20" height="20">
              <use href="/icons.svg#icon-freezer"></use>
            </svg>
            <p className={css.info}>{content.freezer} freezer</p>
          </li>
        )}
        {content.hob > 0 && (
          <li className={css["wrapper-services"]}>
            <svg className={css["my-icon"]} width="20" height="20">
              <use href="/icons.svg#icon-hob"></use>
            </svg>
            <p className={css.info}>{content.hob} hob</p>
          </li>
        )}
        {content.microwave > 0 && (
          <li className={css["wrapper-services"]}>
            <svg className={css["my-icon"]} width="20" height="20">
              <use href="/icons.svg#icon-microwave"></use>
            </svg>
            <p className={css.info}>{content.microwave} microwave</p>
          </li>
        )}
         {content.gas > 0 && (
          <li className={css["wrapper-services"]}>
            <svg className={css["my-icon-unique"]} width="20" height="20">
              <use href="/icons.svg#icon-gas"></use>
            </svg>
            <p className={css.info}>{content.gas} gas</p>
          </li>
        )}
         {content.water > 0 && (
          <li className={css["wrapper-services"]}>
            <svg className={css["my-icon"]} width="20" height="20">
              <use href="/icons.svg#icon-water"></use>
            </svg>
            <p className={css.info}>{content.water} water</p>
          </li>
        )}
      </ul>

      {/* Vehicle details section */}
      <div className={css['vehicle-details']}>
        <p className={css['vehicle-details-header']}>Vehicle Details</p>
        <ul className={css["vehicle-info"]}>
    {content.form && (
      <li className={css["vehicle-item"]}>
        <span className={css["vehicle-property"]}>Form:</span>
        <span className={css["vehicle-value"]}>{content.form}</span>
      </li>
    )}
    {content.length && (
      <li className={css["vehicle-item"]}>
        <span className={css["vehicle-property"]}>Length:</span>
        <span className={css["vehicle-value"]}>{content.length}</span>
      </li>
    )}
    {content.width && (
      <li className={css["vehicle-item"]}>
        <span className={css["vehicle-property"]}>Width:</span>
        <span className={css["vehicle-value"]}>{content.width}</span>
      </li>
    )}
    {content.height && (
      <li className={css["vehicle-item"]}>
        <span className={css["vehicle-property"]}>Height:</span>
        <span className={css["vehicle-value"]}>{content.height}</span>
      </li>
    )}
    {content.trunk && (
      <li className={css["vehicle-item"]}>
        <span className={css["vehicle-property"]}>Trunk:</span>
        <span className={css["vehicle-value"]}>{content.trunk}</span>
      </li>
    )}
    {content.consumption && (
      <li className={css["vehicle-item"]}>
        <span className={css["vehicle-property"]}>Consumption:</span>
        <span className={css["vehicle-value"]}>{content.consumption}</span>
      </li>
    )}
  </ul>
      </div>
    </div>
  );
};

export default FeaturesTab;
