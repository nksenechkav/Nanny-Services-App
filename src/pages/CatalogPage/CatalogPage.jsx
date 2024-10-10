// src/pages/CatalogPage/CatalogPage.jsx

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle.jsx';
import { fetchCampers } from '../../redux/campers/operations.js';
import { selectIsLoading, selectError } from '../../redux/campers/selectors.js';
import LoaderComponent from '../../components/loader/Loader.jsx';
import ErrorMessage from '../../components/error/ErrorMessage.jsx';
import SearchBox from '../../components/searchBox/SearchBox.jsx';
import CamperList from '../../components/camperList/CamperList.jsx';
import css from './CatalogPage.module.scss';
import { selectFilteredCampers } from '../../redux/filters/selectors.js';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filteredCampers = useSelector(selectFilteredCampers); 

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className={css["catalog-page-container"]}>
      <DocumentTitle>Catalog</DocumentTitle>
      <SearchBox/>
      {isLoading && <LoaderComponent />}
      {error && <ErrorMessage />}  
      {filteredCampers.length > 0 ? (
        <CamperList campers={filteredCampers} />
      ) : (
        <p className={css["catalog-text"]}>No searched campers.</p>
      )}
    </div>
  );
}
