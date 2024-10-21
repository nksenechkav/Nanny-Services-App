// src/components/app/App.jsx

import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../layout/Layout.jsx';
import { PrivateRoute } from '../PrivateRoute.jsx';
import { RestrictedRoute } from '../RestrictedRoute.jsx';
import css from './App.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from '../../redux/auth/selectors.js';
import { refreshUser } from '../../redux/auth/operations.js';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const FavouritesPage = lazy(() => import('../../pages/FavouritesPage/FavouritesPage'));
const NotFoundPage = lazy(() => import("../../pages/notFoundPage/NotFoundPage"));


const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p className={css.starting}>Refreshing user...</p>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/catalog" component={<RegistrationPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/catalog" component={<LoginPage />} />
          }
        />
         <Route
          path="/catalog"
          element={
            <PrivateRoute redirectTo="/login" component={<CatalogPage />} />
          }
        />
        <Route
          path="/favorites"
          element={
            <PrivateRoute redirectTo="/login" component={<FavouritesPage />} />
          }
        />
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </Layout>
);
};

export default App