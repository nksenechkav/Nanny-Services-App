// src/redux/auth/operations.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../../firebaseConfig';

// Utility to set token in Redux state (no need to manually manage tokens in Firebase)
const setAuthHeader = () => {
  // This can be used to set headers if needed
};

// Register a new user
export const register = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Обновляем профиль пользователя для добавления имени
      await updateProfile(user, { displayName: name });
      const token = await user.getIdToken();
      console.log(user);
      return { user: { name, email: user.email, uid: user.uid }, token };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Log in an existing user
export const logIn = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);
      const token = await user.getIdToken();
      setAuthHeader(token);
      return { user: { name: user.displayName, email: user.email, uid: user.uid }, token };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Log out the current user
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await signOut(auth);
    // Firebase automatically handles token removal, so we don't need to clear it manually.
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Refresh user (Check the current authentication status)
export const refreshUser = createAsyncThunk( 'auth/refresh', async (_, thunkAPI) => {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const token = await user.getIdToken();
          setAuthHeader(token);
          resolve({ name: user.displayName, email: user.email, uid: user.uid });
        } else {
          reject('User not authenticated');
        }
      });
    });
  }
);
