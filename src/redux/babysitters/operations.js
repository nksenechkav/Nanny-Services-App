// src/redux/campers/operations.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ref, get } from "firebase/database";
import { db } from "../../firebaseConfig";
import { v4 as uuidv4 } from 'uuid'; // для генерации UUID

export const fetchBabysitters = createAsyncThunk(
  'babysitters/fetchAll',
  async (_, thunkAPI) => {
    try {
      const babysittersRef = ref(db, '/');
      const snapshot = await get(babysittersRef);

      if (snapshot.exists()) {
        const data = snapshot.val();

        // Преобразуем объект данных в массив и добавляем уникальные id каждому объекту
        const babysittersArray = Object.keys(data).map(key => ({
          ...data[key],
          id: uuidv4() // добавляем уникальный id для каждого объекта
        }));

        return babysittersArray;
      } else {
        throw new Error("No data available");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

