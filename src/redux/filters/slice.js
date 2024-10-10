// src/redux/filters/slice.js

import { createSlice } from "@reduxjs/toolkit";

const InitialFilters = {
  location: "",
  equipment: {},
  vehicleType: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: InitialFilters,
  reducers: {
    changeFilter: (state, action) => {
      state.location = action.payload;
    },
    toggleEquipment: (state, action) => {
      const { equipmentId, checked } = action.payload;
      state.equipment[equipmentId] = checked;
    },
    changeVehicleType: (state, action) => {
      state.vehicleType = action.payload;
    },
    resetFilters: (state) => {
      state.location = "";
      state.equipment = {};
      state.vehicleType = "";
    },
  },
});

export const { changeFilter, toggleEquipment, changeVehicleType, resetFilters } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
