// src/redux/babysitters/slice.js

import { createSlice } from "@reduxjs/toolkit";
import { fetchBabysitters, fetchFavouritesFromFirebase, saveFavouritesToFirebase } from './operations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialBabysitters = {
    items: [],
    isLoading: false,
    error: null,
    favourites: [],
}

const babysittersSlice = createSlice({
  name: "babysitters",
  initialState: initialBabysitters,

  reducers: {
    addBabysitterToFavourites: (state, action) => {
      const babysitterId = action.payload;
      if (!state.favourites.includes(babysitterId)) {
        state.favourites.push(babysitterId);
      }
    },
    deleteBabysitterFromFavourites: (state, action) => {
      const babysitterId = action.payload;
      state.favourites = state.favourites.filter(id => id !== babysitterId);
    },

    clearFavourites: (state) => {
      state.favourites = [];
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchBabysitters.pending, handlePending)
      .addCase(fetchBabysitters.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchBabysitters.rejected, handleRejected)
      .addCase(fetchFavouritesFromFirebase.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.favourites = action.payload;
      })
      .addCase(fetchFavouritesFromFirebase.rejected, handleRejected)
      .addCase(saveFavouritesToFirebase.rejected, handleRejected);
  }
});
export const { addBabysitterToFavourites, deleteBabysitterFromFavourites, clearFavourites } = babysittersSlice.actions;
export const babysittersReducer = babysittersSlice.reducer;