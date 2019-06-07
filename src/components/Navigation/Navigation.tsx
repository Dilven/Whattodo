import React from 'react';
import styles from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <div className={styles.container}>
      <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
        <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" />
      </svg>
    </div>
  );
};
