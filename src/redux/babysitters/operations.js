// src/redux/babysitters/operations.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ref, get, set } from "firebase/database";
import { db } from "../../../firebaseConfig";
import { v4 as uuidv4 } from 'uuid'; // для генерации UUID

export const fetchBabysitters = createAsyncThunk(

    'babysitters/fetchAndAdd',
    async (babysitterData, thunkAPI) => {
      try {
        const babysittersRef = ref(db, '/babysitters');
        const snapshot = await get(babysittersRef);
  
        let babysittersArray = [];
  
        if (snapshot.exists()) {
          const data = snapshot.val();
          console.log("Data fetched:", snapshot.val());
  
          // Преобразуем объект данных в массив и добавляем унікальні id кожному об'єкту
          babysittersArray = Object.keys(data).map(key => ({
            ...data[key],
            id: key // використання ключа як id
          }));
        } else {
          console.log("No data available");
        }
  
        // Додаємо нову няню з унікальним id, якщо babysitterData передано
        if (babysitterData) {
          const newId = uuidv4(); // генеруємо унікальний id
          const babysitterWithId = { ...babysitterData, id: newId }; // додаємо id до даних
          const newBabysitterRef = ref(db, `babysitters/${newId}`);
          await set(newBabysitterRef, babysitterWithId); // додаємо нового няня в базу даних
          babysittersArray.push(babysitterWithId); // додаємо нового няня до масиву
        }
  
        return babysittersArray; // повертаємо масив няні
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

export const saveFavouritesToFirebase = createAsyncThunk(
  'babysitters/saveFavourites',
  async (userId, thunkAPI) => {
    try {
      const favouritesRef = ref(db, `favourites/${userId}`);
      const favourites = thunkAPI.getState().babysitters.favourites;
      await set(favouritesRef, favourites);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFavouritesFromFirebase = createAsyncThunk(
  'babysitters/fetchFavourites',
  async (userId, thunkAPI) => {
    try {
      const favouritesRef = ref(db, `favourites/${userId}`);
      const snapshot = await get(favouritesRef);
      return snapshot.exists() ? snapshot.val() : [];
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
