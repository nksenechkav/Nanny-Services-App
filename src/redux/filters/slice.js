// src/redux/filters/slice.js

import { createSlice } from "@reduxjs/toolkit";

const initialFilters = {
  filteredItemsByAtoZ: [],
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
  },
});

export const { sortAtoZ } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
