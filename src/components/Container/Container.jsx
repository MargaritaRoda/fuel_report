import React from 'react';
import styles from './Container.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Container = ({ children, className }) => {
  return <div className={classNames(styles.root, className)}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
