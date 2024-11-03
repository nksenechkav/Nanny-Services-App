// src/components/app/App.jsx

import { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from '../layout/Layout.jsx';
import { PrivateRoute } from '../PrivateRoute.jsx';
import { RestrictedRoute } from '../RestrictedRoute.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from '../../redux/auth/selectors.js';
import { refreshUser } from '../../redux/auth/operations.js';
import { RegistrationForm } from '../registrationForm/RegistrationForm.jsx';
import { LoginForm } from '../loginForm/LoginForm.jsx';
import LoaderComponent from '../loader/Loader.jsx';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const FavouritesPage = lazy(() => import('../../pages/FavouritesPage/FavouritesPage'));
const NotFoundPage = lazy(() => import("../../pages/notFoundPage/NotFoundPage"));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    // Open login modal when the user navigates to the login route
    if (location.pathname === '/login') {
      setLoginModalOpen(true);
    } else {
      setLoginModalOpen(false); // Close the modal on other routes
    }
  }, [location]);

  return isRefreshing ? (
    <LoaderComponent/>
  ) : (
    <Layout>
      <Suspense fallback={<LoaderComponent />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/catalog" component={<RegistrationForm />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/catalog" component={<LoginForm onRequestClose={() => setLoginModalOpen(false)} />} />
          }
        />
        <Route
          path="/favorites"
          element={
            <PrivateRoute redirectTo="/login" component={<FavouritesPage />} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <LoginForm isOpen={isLoginModalOpen} onRequestClose={() => setLoginModalOpen(false)} />
      </Suspense>
    </Layout>
  );
};

export default App;