// src/pages/CatalogPage/CatalogPage.jsx

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle.jsx';
import { selectIsLoading, selectError, selectBabysitters } from '../../redux/babysitters/selectors.js';
import LoaderComponent from '../../components/loader/Loader.jsx';
import ErrorMessage from '../../components/error/ErrorMessage.jsx';
import SearchBox from '../../components/searchBox/SearchBox.jsx';
import css from './CatalogPage.module.scss';
import { resetFilter } from '../../redux/filters/slice';
import BabysitterList from '../../components/babysitterList/BabysitterList.jsx';
import { selectsortAtoZ } from '../../redux/filters/selectors.js';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const babysitters = useSelector(selectBabysitters);
  const filteredItems = useSelector(selectsortAtoZ); // получаем отфильтрованные элементы

  useEffect(() => {
    dispatch(resetFilter(babysitters));
  }, [dispatch, babysitters]);

  return (
    <div className={css["catalog-page-container"]}>
      <DocumentTitle>Catalog</DocumentTitle>
      <div className={css["catalog-page-header"]}>
      </div>
      
      <div className={css["catalog-page-main"]}>
      <SearchBox/>
      {isLoading && <LoaderComponent />}
      {error && <ErrorMessage />}
      {filteredItems.length > 0 ? (
        <BabysitterList babysitters={filteredItems} />
      ) : (
        <p className={css["catalog-text"]}>No searched nannies.</p>
      )}  
      </div>
    </div>
  );
}
