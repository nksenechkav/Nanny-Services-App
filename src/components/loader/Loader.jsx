// src/components/loader/Loader.jsx

import { FidgetSpinner } from 'react-loader-spinner'
import css from './Loader.module.scss';

const LoaderComponent = () => {
    return (
     <div className={css.loader}>
      <FidgetSpinner
            height="250"
            width="250"
            ariaLabel="fidget-spinner-loading"
            wrapperStyle={{}}
            wrapperClass="fidget-spinner-loading"
            visible={true}
     />
     </div>
    );
  }
  
  export default LoaderComponent;