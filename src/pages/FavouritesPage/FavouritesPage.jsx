// src/pages/FavouritesPage/FavouritesPage.jsx

import { useSelector } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle.jsx';

import { selectIsLoading, selectError, selectFavouritesCampers } from '../../redux/campers/selectors.js';
import LoaderComponent from '../../components/loader/Loader.jsx';
import ErrorMessage from '../../components/error/ErrorMessage.jsx';
import CamperList from '../../components/camperList/CamperList.jsx';
import css from './FavouritesPage.module.scss';

export default function FavouritesPage() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const favouritesCampers = useSelector(selectFavouritesCampers);
  
  return (
    <div className={css["favourites-page-container"]}>
      <DocumentTitle>Favourites</DocumentTitle>
      {isLoading && <LoaderComponent />}
      {error && <ErrorMessage />}
      {favouritesCampers.length > 0 ? (
        <CamperList campers={favouritesCampers} />
      ) : (
        <p className={css["favourites-text"]}>No favourites yet.</p>
      )}
    </div>
  );
}
