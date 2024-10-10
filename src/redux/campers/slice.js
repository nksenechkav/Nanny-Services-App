// src/redux/campers/slice.js

import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from './operations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialCampers = {
    items: [],
    isLoading: false,
    error: null,
    favourites: [],
  
}

const campersSlice = createSlice({
  name: "campers",
  initialState: initialCampers,

  reducers: {
    addCamperToFavourites: (state, action) => {
      const camperId = action.payload;
      if (!state.favourites.includes(camperId)) {
        state.favourites.push(camperId);
      }
    },
    deleteCamperFromFavourites: (state, action) => {
      const camperId = action.payload;
      state.favourites = state.favourites.filter(id => id !== camperId);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, handleRejected)
  }
});
export const { addCamperToFavourites, deleteCamperFromFavourites } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;