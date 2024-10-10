// src/redux/campers/selectors.js

import { createSelector } from 'reselect';

export const selectCampers = (state) => state.campers.items;
const selectFavouriteIds = (state) => state.campers.favourites;

export const selectFavouritesCampers = createSelector(
  [selectCampers, selectFavouriteIds],
  (campers, favourites) => {
    return campers.filter(camper => favourites.includes(camper._id));
  }
);

export const selectIsLoading = (state) => state.campers.isLoading;

export const selectError = (state) => state.campers.error;
