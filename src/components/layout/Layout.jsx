// src/components/layout/Layout.jsx

import css from './Layout.module.scss';
import { Suspense } from 'react';
import { AppBar } from '../appBar/AppBar.jsx';

export const Layout = ({children}) => {
  return (
    <div className={css["container"]}>
      <AppBar />
      <Suspense fallback={null}> 
      {children}
      </Suspense>
    </div>
  );
};
