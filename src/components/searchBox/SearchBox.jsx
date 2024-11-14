// src/pages/searchBox/SearchBox.jsx

import { useState } from 'react';
import css from './SearchBox.module.scss';
import { useDispatch } from 'react-redux';
import { setSortOrder, setPriceRange, setPopularity, resetFilters } from '../../redux/filters/slice';

const SearchBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Show All');
  const options = ['A to Z', 'Z to A', 'Less than 20$', 'Greater than 20$', 'Popular', 'Not popular', 'Show All'];
  const dispatch = useDispatch();

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);

    switch (option) {
      case 'A to Z':
      case 'Z to A':
        dispatch(setSortOrder(option));
        break;
      case 'Less than 20$':
        dispatch(setPriceRange('lessThan20'));
        break;
      case 'Greater than 20$':
        dispatch(setPriceRange('greaterThan20'));
        break;
      case 'Popular':
        dispatch(setPopularity(true));
        break;
      case 'Not popular':
        dispatch(setPopularity(false));
        break;
      case 'Show All':
        dispatch(resetFilters());
        break;
      default:
        break;
    }
  };
  return (
    <div className={css.searchBox}>
      <p className={css.label}>
        Filters:
      </p>
    <div className={css.searchBox}>
      <button className={css.select} onClick={() => setIsOpen(!isOpen)}>{selected}</button>
      {isOpen && (
        <ul className={css['dropdown-menu']}>
          {options.map((option, index) => (
            <li className={`${css.option} ${selected === option ? css.selectedOption : ''}`} key={index} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
};

export default SearchBox;
