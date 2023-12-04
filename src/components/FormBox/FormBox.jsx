import React from 'react';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { Container } from '../Container';
import { useStyles } from './FormBoxStyles';
import PropTypes from 'prop-types';

export const FormBox = ({ children, onSubmit, textTitle }) => {
  const classes = useStyles();
  return (
    <Container>
      <Box component="form" autoComplete="off" className={classes.form}>
        <h3 className={classes.formTitle}>{textTitle}</h3>
        {children}

        <Button
          variant="contained"
          onSubmit={onSubmit}
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
};
