// src/pages/FavouritesPage/FavouritesPage.jsx

import { useSelector } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle.jsx';

import { selectIsLoading, selectError, selectFavouritesBabysitters } from '../../redux/babysitters/selectors.js';
import LoaderComponent from '../../components/loader/Loader.jsx';
import ErrorMessage from '../../components/error/ErrorMessage.jsx';
import BabysitterList from '../../components/babysitterList/BabysitterList.jsx';
import css from './FavouritesPage.module.scss';

export default function FavouritesPage() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const favouritesBabysitters = useSelector(selectFavouritesBabysitters);

  return (
    <div className={css["favourites-page-container"]}>
      <DocumentTitle>Favourites</DocumentTitle>
      <div className={css["favourites-page-header"]}>
      </div>
      <div className={css["favourites-page-main"]}>
      {isLoading && <LoaderComponent />}
      {error && <ErrorMessage />}
      {favouritesBabysitters.length > 0 ? (
        <BabysitterList babysitters={favouritesBabysitters} />
      ) : (
        <p className={css["favourites-text"]}>No favourites yet.</p>
      )}
      </div>
    </div>
  );
}
