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

// Register a new user
export const register = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await updateProfile(user, { displayName: name });
      return { name, email: user.email, uid: user.uid };
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
      return { name: user.displayName, email: user.email, uid: user.uid };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Log out the current user
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await signOut(auth);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Refresh user on page reload
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          resolve({ name: user.displayName, email: user.email, uid: user.uid });
        } else {
          reject('User not authenticated');
        }
      });
    });
  }
);
