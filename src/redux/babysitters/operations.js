// src/redux/campers/operations.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ref, get } from "firebase/database";
import { db } from "../../firebaseConfig";

export const fetchBabysitters = createAsyncThunk(
  'babysitters/fetchAll',
  async (_, thunkAPI) => {
    try {
      const babysittersRef = ref(db, 'babysitters');
      const snapshot = await get(babysittersRef);
      console.log(snapshot);
      console.log(babysittersRef);
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        throw new Error("No data available");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
