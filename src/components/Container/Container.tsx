// import React from 'react';
// import styles from './Container.module.scss';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
//
// export const Container = ({ children, className }) => {
//   return <div className={classNames(styles.root, className)}>{children}</div>;
// };
//
// Container.propTypes = {
//   children: PropTypes.any,
//   className: PropTypes.string,
// };

import React, { ReactNode } from 'react';
import styles from './Container.module.scss';
import classNames from 'classnames';

interface ContainerProps {
  children?: ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={classNames(styles.root, className)}>{children}</div>;
};

