// src/pages/CatalogPage/CatalogPage.jsx

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle.jsx';
import { selectIsLoading, selectError } from '../../redux/babysitters/selectors.js';
import LoaderComponent from '../../components/loader/Loader.jsx';
import ErrorMessage from '../../components/error/ErrorMessage.jsx';
import SearchBox from '../../components/searchBox/SearchBox.jsx';
import css from './CatalogPage.module.scss';
// import { selectFilteredCampers } from '../../redux/filters/selectors.js';
import { selectBabysitters } from '../../redux/babysitters/selectors.js';
import { fetchBabysitters } from '../../redux/babysitters/operations.js';
import BabysitterList from '../../components/babysitterList/BabysitterList.jsx';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const babysitters = useSelector(selectBabysitters);
  // const filteredCampers = useSelector(selectFilteredCampers); 


  useEffect(() => {
    dispatch(fetchBabysitters());
  }, [dispatch]);

  return (
    <div className={css["catalog-page-container"]}>
      <DocumentTitle>Catalog</DocumentTitle>
      <div className={css["catalog-page-header"]}>
      </div>
      
      <div className={css["catalog-page-main"]}>
      <SearchBox/>
      {isLoading && <LoaderComponent />}
      {error && <ErrorMessage />}
      {babysitters.length > 0 ? (
        <BabysitterList babysitters={babysitters} />
      ) : (
        <p className={css["catalog-text"]}>No searched nannies.</p>
      )}  
      {/* {filteredCampers.length > 0 ? (
        <CamperList campers={filteredCampers} />
      ) : (
        <p className={css["catalog-text"]}>No searched nannies.</p>
      )} */}
      </div>
    </div>
  );
}
