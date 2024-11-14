// src/redux/filters/slice.js

import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    sortOrder: '',         // Порядок сортировки: 'A to Z', 'Z to A'
    priceRange: null,       // Диапазон цен: 'lessThan10', 'greaterThan10'
    popular: undefined,     // Популярность: true, false или undefined
  },
  reducers: {
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setPopularity: (state, action) => {
      state.popular = action.payload;
    },
    resetFilters: (state) => {
      state.sortOrder = '';
      state.priceRange = null;
      state.popular = undefined;
    },
  },
});

export const { setSortOrder, setPriceRange, setPopularity, resetFilters } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
