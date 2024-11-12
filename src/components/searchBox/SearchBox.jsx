// src/pages/searchBox/SearchBox.jsx

// import { changeFilter, toggleEquipment, changeVehicleType, resetFilters } from '../../redux/filters/slice.js';
// import css from './SearchBox.module.scss';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectLocationFilter, selectEquipmentFilters, selectVehicleTypeFilter } from '../../redux/filters/selectors.js';
// import { useState } from 'react';

// const SearchBox = () => {
//   const dispatch = useDispatch();
//   const initialFilter = useSelector(selectLocationFilter);
//   const initialEquipmentFilters = useSelector(selectEquipmentFilters);
//   const initialVehicleType = useSelector(selectVehicleTypeFilter);

//   const [filter, setFilter] = useState(initialFilter);
//   const [equipmentFilters, setEquipmentFilters] = useState(initialEquipmentFilters);
//   const [selectedVehicleType, setSelectedVehicleType] = useState(initialVehicleType);

//   // Оновлюємо локальний стан для фільтрів
//   const handleLocationChange = (e) => setFilter(e.target.value);
//   const handleCheckboxChange = (event) => {
//     const { id, checked } = event.target;
//     setEquipmentFilters({
//       ...equipmentFilters,
//       [id]: checked
//     });
//   };
//   const handleRadioChange = (event) => setSelectedVehicleType(event.target.id);

//   // Кнопка "Search" для застосування фільтрів
//   const handleSearchClick = () => {
//     // Скидаємо фільтри у Redux
//     dispatch(resetFilters());

//     // Встановлюємо нові фільтри у Redux
//     dispatch(changeFilter(filter));
//     Object.entries(equipmentFilters).forEach(([equipmentId, checked]) => {
//       dispatch(toggleEquipment({ equipmentId, checked }));
//     });
//     dispatch(changeVehicleType(selectedVehicleType));

//     // Скидаємо локальний стан після скидання фільтрів у Redux
//     setFilter("");
//     setEquipmentFilters({});
//     setSelectedVehicleType("");
//   };
  
//   return (
//     <div className={css.searchBox}>
//       <div className={css.inputWrapper}>
//         <p className={css.label}>Location</p>
//         <svg className={css["my-icon"]} width="16" height="16">
//           <use href="/icons.svg#icon-map-black"></use>
//         </svg>
//         <input
//           className={css.searchField}
//           type="text"
//           placeholder="Kyiv, Ukraine"
//           value={filter}
//           onChange={handleLocationChange}
//         />
//       </div>
//       <p className={css["label-text"]}>Filters</p>
//       <h2 className={css["label-header"]}>Vehicle Equipment</h2>
//       <ul className={css["checkbox-list"]}>
//         {[
//           { id: 'adults-checkbox', icon: 'icon-users', text: 'Adults', iconClass: 'checkbox-icon-unique' },
//           { id: 'transmission-checkbox', icon: 'icon-automatic', text: 'Automatic', iconClass: 'checkbox-icon' },
//           { id: 'engine-checkbox', icon: 'icon-petrol', text: 'Engine', iconClass: 'checkbox-icon-unique' },
//           { id: 'kitchen-checkbox', icon: 'icon-kitchen', text: 'Kitchen', iconClass: 'checkbox-icon' },
//           { id: 'beds-checkbox', icon: 'icon-beds', text: 'Beds', iconClass: 'checkbox-icon' },
//           // { id: 'airConditioner-checkbox', icon: 'icon-AC', text: 'AC', iconClass: 'checkbox-icon' },
//           { id: 'airConditioner-checkbox', icon: 'icon-air-conditioner', text: 'Air Conditioner', iconClass: 'checkbox-icon' },
//           { id: 'CD-checkbox', icon: 'icon-CD', text: 'CD', iconClass: 'checkbox-icon' },
//           { id: 'radio-checkbox', icon: 'icon-radio', text: 'Radio', iconClass: 'checkbox-icon' },
//           { id: 'TV-checkbox', icon: 'icon-TV', text: 'TV', iconClass: 'checkbox-icon' },
//           { id: 'shower-checkbox', icon: 'icon-shower', text: 'Shower', iconClass: 'checkbox-icon' },
//           { id: 'toilet-checkbox', icon: 'icon-toilet', text: 'Toilet', iconClass: 'checkbox-icon-unique' },
//           { id: 'freezer-checkbox', icon: 'icon-freezer', text: 'Freezer', iconClass: 'checkbox-icon' },
//           { id: 'hob-checkbox', icon: 'icon-hob', text: 'Hob', iconClass: 'checkbox-icon' },
//           { id: 'microwave-checkbox', icon: 'icon-microwave', text: 'Microwave', iconClass: 'checkbox-icon' },
//           { id: 'gas-checkbox', icon: 'icon-gas', text: 'Gas', iconClass: 'checkbox-icon-unique' },
//           { id: 'water-checkbox', icon: 'icon-water', text: 'Water', iconClass: 'checkbox-icon' },
//         ].map(({ id, icon, text, iconClass }) => (
//           <li
//             key={id}
//             className={`${css["wrapper-services"]} ${equipmentFilters[id] ? css["checked"] : ''}`}
//           >
//             <input
//               type="checkbox"
//               id={id}
//               className={css["checkbox-input"]}
//               checked={equipmentFilters[id] || false}
//               onChange={handleCheckboxChange}
//             />
//             <label htmlFor={id} className={css["checkbox-label"]}>
//               <svg className={css[iconClass]} width="32" height="32">
//                 <use href={`/icons.svg#${icon}`}></use>
//               </svg>
//               <p className={css.info}>{text}</p>
//             </label>
//           </li>
//         ))}
//       </ul>
//       <h2 className={css["label-header"]}>Vehicle Type</h2>
//       <ul className={css["radio-list"]}>
//         {[
//           { id: 'panelTruck-radio', icon: 'icon-van', text: 'Van', iconClass: 'radio-icon-unique' },
//           { id: 'fullyIntegrated-radio', icon: 'icon-fully-integrated', text: 'Fully Integrated', iconClass: 'radio-icon-unique' },
//           { id: 'alcove-radio', icon: 'icon-alcove', text: 'Alcove', iconClass: 'radio-icon-unique' },
//         ].map(({ id, icon, text, iconClass }) => (
//           <li
//             key={id}
//             className={`${css["wrapper-services"]} ${selectedVehicleType === id ? css["checked"] : ''}`}
//           >
//             <input
//               type="radio"
//               id={id}
//               name="vehicleType"
//               className={css["radio-input"]}
//               checked={selectedVehicleType === id}
//               onChange={handleRadioChange}
//             />
//             <label htmlFor={id} className={css["radio-label"]}>
//               <svg className={css[iconClass]} width="40" height="28">
//                 <use href={`/icons.svg#${icon}`}></use>
//               </svg>
//               <p className={css.info}>{text}</p>
//             </label>
//           </li>
//         ))}
//       </ul>
//       <button className={css.btn} onClick={handleSearchClick}>
//         Search
//       </button>
//     </div>
//   );
// };

// export default SearchBox;

import { useState } from 'react';
import css from './SearchBox.module.scss';

const SearchBox = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState('Show All');

  const filterOptions = [
    { value: 'AtoZ', label: 'A to Z' },
    { value: 'ZtoA', label: 'Z to A' },
    { value: 'lessThan10', label: 'Less than 10$' },
    { value: 'greaterThan10', label: 'Greater than 10$' },
    { value: 'popular', label: 'Popular' },
    { value: 'notPopular', label: 'Not popular' },
    { value: 'showAll', label: 'Show All' },
  ];

  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedFilter(selectedValue);
    onFilterChange(selectedValue); // Передаем выбранное значение в родительский компонент
  };

  return (
    <div className={css.searchBox}>
      <label htmlFor="filter" className={css.label}>
        Filters:
      </label>
      <select
        id="filter"
        className={css.select}
        value={selectedFilter}
        onChange={handleFilterChange}
      >
        {filterOptions.map((option) => (
          <option className={css.option} key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchBox;
