import React from 'react';
import styles from './ErrorBoundary.module.scss';

export const ErrorBoundary = () => {
  return <div className={styles.root}>Oooops! Something went wrong</div>;
};
