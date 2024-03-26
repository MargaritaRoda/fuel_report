import React, {FormEvent, ReactNode} from 'react';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { Container } from '../Container';
import { useStyles } from './FormBoxStyles';
import classNames from 'classnames';

interface FormBoxProps {
  children?: ReactNode;
  textTitle: string;
  className?: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}
export const FormBox: React.FC<FormBoxProps>  = ({
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

