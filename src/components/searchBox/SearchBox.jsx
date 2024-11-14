// src/pages/searchBox/SearchBox.jsx

import { useState } from 'react';
import css from './SearchBox.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { sortAtoZ, resetFilter } from '../../redux/filters/slice';
import { selectBabysitters } from '../../redux/babysitters/selectors';

const SearchBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Show All');
  const options = ['A to Z', 'Z to A', 'Less than 10$', 'Greater than 10$', 'Popular', 'Not popular', 'Show All'];
  const babysitters = useSelector(selectBabysitters); // получаем список нянечек
  const dispatch = useDispatch();

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (option === 'A to Z' || option === 'Z to A') {
      dispatch(sortAtoZ({ babysitters, order: option }));
    } else if (option === 'Less than 10$' || option === 'Greater than 10$') {
      const condition = option === 'Less than 10$' ? 'lessThan10' : 'greaterThan10';
      dispatch(filterByPrice({ babysitters, condition }));
    } else if (option === 'Show All') {
      dispatch(resetFilter(babysitters));
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
