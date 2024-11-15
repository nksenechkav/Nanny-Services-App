// src/components/app/App.jsx

import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../layout/Layout.jsx';
import { PrivateRoute } from '../PrivateRoute.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from '../../redux/auth/selectors.js';
import { refreshUser } from '../../redux/auth/operations.js';
import LoaderComponent from '../loader/Loader.jsx';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const FavouritesPage = lazy(() => import('../../pages/FavouritesPage/FavouritesPage'));
const NotFoundPage = lazy(() => import("../../pages/notFoundPage/NotFoundPage"));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <LoaderComponent/>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route
          path="/favourites"
          element={
            <PrivateRoute redirectTo="/login" component={<FavouritesPage />} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

export default App;