// src/redux/filters/slice.js

import { createSlice } from "@reduxjs/toolkit";

const initialFilters = {
  filteredItemsByAtoZ: [],
  filteredItemsByPrice: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: initialFilters,
  reducers: {
    sortAtoZ: (state, action) => {
      const { babysitters, order } = action.payload;
      state.filteredItemsByAtoZ = [...babysitters].sort((a, b) => {
        const nameA = a.name || ''; // Устанавливаем значение по умолчанию, если name отсутствует
        const nameB = b.name || '';
        
        return order === 'A to Z' 
          ? nameA.localeCompare(nameB)
          : nameB.localeCompare(nameA);
      });
    },
    filterByPrice: (state, action) => {
      const { babysitters, priceRange } = action.payload;
      state.filteredItemsByPrice = babysitters.filter((babysitter) => {
        return priceRange === "Less than 10$"
          ? babysitter.price_per_hour < 10
          : babysitter.price_per_hour >= 10;
      });
    },
    resetFilter: (state, action) => {
      // Сброс к полному списку нянь
      state.filteredItemsByAtoZ = action.payload;
    },
  },
});

export const { sortAtoZ, filterByPrice, resetFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
