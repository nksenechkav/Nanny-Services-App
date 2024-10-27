// src/redux/campers/selectors.js

import { createSelector } from 'reselect';

export const selectBabysitters = (state) => state.babysitters.items;
const selectFavouriteIds = (state) => state.babysitters.favourites;

export const selectFavouritesBabysitters = createSelector(
  [selectBabysitters, selectFavouriteIds],
  (babysitters, favourites) => {
    return babysitters.filter(babysitters => favourites.includes(babysitters._id));
  }
);

export const selectIsLoading = (state) => state.babysitters.isLoading;

export const selectError = (state) => state.babysitters.error;
