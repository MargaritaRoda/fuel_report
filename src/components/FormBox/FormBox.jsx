import React from 'react';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { Container } from '../Container';
import { useStyles } from './FormBoxStyles';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const FormBox = ({
  children,
  textTitle,
  className,
  onSubmit,
}) => {
  const classes = useStyles();

  return (
    <Container>
      <Box
        component="form"
        autoComplete="off"
        className={classNames(classes.form, className)}
        onSubmit={onSubmit}
      >
        <h3 className={classes.formTitle}>{textTitle}</h3>
        {children}
        <Button
          variant="contained"
          type="submit"
          className={classes.MuiButtonBaseRootMuiButtonRootFormBtn}
        >
          Подтвердить
        </Button>
      </Box>
    </Container>
  );
};

FormBox.propTypes = {
  children: PropTypes.any,
  onSubmit: PropTypes.func,
  textTitle: PropTypes.string,
  className: PropTypes.string,
};
