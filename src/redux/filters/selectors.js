// src/redux/filters/selectors.js

import { createSelector } from 'reselect';
import { selectBabysitters, selectFavouritesBabysitters } from '../babysitters/selectors'; // Используем существующий селектор

const selectFilters = (state) => state.filters;

export const selectFilteredBabysitters = createSelector(
  [selectBabysitters, selectFilters],
  (babysitters, filters) => {
    let filteredBabysitters = [...babysitters];

    // Фильтрация по популярности (рейтинг 4.5 и выше)
    if (filters.popular !== undefined) {
      filteredBabysitters = filteredBabysitters.filter((b) =>
        filters.popular ? b.rating >= 4.8 : b.rating < 4.8
      );
    }

    // Фильтрация по цене
    if (filters.priceRange) {
      filteredBabysitters = filteredBabysitters.filter((b) =>
        filters.priceRange === 'lessThan20' ? b.price_per_hour < 20 : b.price_per_hour >= 20
      );
    }

    // Сортировка по алфавиту
    if (filters.sortOrder) {
      filteredBabysitters.sort((a, b) =>
        filters.sortOrder === 'A to Z' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      );
    }

    return filteredBabysitters;
  }
);

export const selectFilteredFavouritesBabysitters = createSelector(
    [selectFavouritesBabysitters, selectFilters],
    (favouritesBabysitters, filters) => {
      let filteredBabysitters = [...favouritesBabysitters];
  
      // Фильтрация по популярности (рейтинг 4.8 и выше)
      if (filters.popular !== undefined) {
        filteredBabysitters = filteredBabysitters.filter((b) =>
          filters.popular ? b.rating >= 4.8 : b.rating < 4.8
        );
      }
  
      // Фильтрация по цене
      if (filters.priceRange) {
        filteredBabysitters = filteredBabysitters.filter((b) =>
          filters.priceRange === 'lessThan20' ? b.price_per_hour < 20 : b.price_per_hour >= 20
        );
      }
  
      // Сортировка по алфавиту
      if (filters.sortOrder) {
        filteredBabysitters.sort((a, b) =>
          filters.sortOrder === 'A to Z' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
        );
      }
  
      return filteredBabysitters;
    }
  );