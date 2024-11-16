// src/redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filters/slice.js";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { authReducer } from "./auth/slice";
import { babysittersReducer } from "./babysitters/slice.js";

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, babysittersReducer);
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["user", "isLoggedIn"], // Указываем, что нужно сохранять
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    babysitters: persistedReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);