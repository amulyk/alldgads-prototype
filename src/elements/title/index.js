import React from 'react';
import styles from './styles.module.scss';

export const Title = ({children}) => {
  return (
    <>
      <p className={styles.title}>{children}</p>
    </>
  )
};
