// src/redux/filters/selectors.js

import { createSelector } from "@reduxjs/toolkit";
import { selectBabysitters } from "../babysitters/selectors";

export const selectLocationFilter = (state) => state.filters.location;
export const selectEquipmentFilters = (state) => state.filters.equipment;
export const selectVehicleTypeFilter = (state) => state.filters.vehicleType;

export const selectFilteredBabysitters = createSelector(
  [selectBabysitters, selectLocationFilter, selectEquipmentFilters, selectVehicleTypeFilter],
  (babysitters, locationFilter, equipmentFilters, vehicleTypeFilter) => {
    const normalizedFilter = locationFilter.toLowerCase().trim();

    return babysitters.filter(camper => {
      // Фільтрація по локації
      const matchesLocation = normalizedFilter ? 
        camper.location.toLowerCase().includes(normalizedFilter) : 
        true;

      // Фільтрація по обладнанню
      const matchesEquipment = Object.entries(equipmentFilters).every(([equipmentId, checked]) => {
        if (checked) {
          const key = equipmentId.replace("-checkbox", "");
          const camperValue = camper[key] || (camper.details && camper.details[key]);

          // Перевірка, якщо значення є числом або рядком
          if (typeof camperValue === 'number') {
            return camperValue > 0; // Перевірка для чисел
          } else if (typeof camperValue === 'string') {
            return camperValue.trim() !== ''; // Перевірка для рядків
          }

          // Якщо значення undefined або інший тип, виключити цей кемпер
          return false;
        }
        return true;
      });

      // Фільтрація по типу транспортного засобу
      const normalizedVehicleType = vehicleTypeFilter 
      ? vehicleTypeFilter.replace('-radio', '') 
      : '';

    const matchesVehicleType = normalizedVehicleType 
      ? camper.form === normalizedVehicleType 
      : true;


      // Повертаємо true, якщо camper відповідає всім умовам
      return matchesLocation && matchesEquipment && matchesVehicleType;
    });
  }
);
