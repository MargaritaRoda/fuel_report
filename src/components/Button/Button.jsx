import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

export const Button = ({ className, text, type, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(styles.root, className)}
    >
      {text}
    </button>
  );
};
