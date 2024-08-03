import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.Loader}>
      <div className={styles.loaderBox}>
        <TailSpin color="#e84f20" strokeWidth={4} height={150} width={150} />
      </div>
    </div>
  );
}

export default Loader;
