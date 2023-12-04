import React from 'react';

import Button from '@mui/material/Button';
import { Container } from '../../components/Container';
import { useStyles } from './AutoInfoStyles';
import { Box, TextField } from '@mui/material';

export const AutoInfo = () => {
  const classes = useStyles();
  const handleGetAutoInfo = () => {};

  return (
    <Container className={classes.formContainer}>
      <Button
        variant="contained"
        className={classes.MuiButtonBaseRootMuiButtonRootReturnBtn}
      >
        Вернуться на предыдущий этап
      </Button>

      <Box component="form" autoComplete="off" className={classes.form}>
        <h3 className={classes.formTitle}>Введите данные автомобиля</h3>
        <TextField
          id="auto"
          label="Автомобиль"
          variant="outlined"
          required={true}
          placeholder="Volkswagen Polo 9418 TН-7"
          helperText="Введите марку и госномер автомобиля"
          sx={{
            '& .MuiFormHelperText-root': {
              fontSize: '1em',
              marginBottom: '1em',
              '@media (max-width: 870px)': {
                fontSize: '0.5em',
              },
            },
            '& .MuiInputBase-input': { fontSize: '1.7em' },
          }}
        />
        <TextField
          id="license"
          label="Водительское удостоверение"
          variant="outlined"
          required={true}
          placeholder="7АА № 115849"
          helperText="Введите серию и номер ВУ"
          sx={{
            '& .MuiFormHelperText-root': {
              fontSize: '1em',
              marginBottom: '1em',
              '@media (max-width: 870px)': {
                fontSize: '0.5em',
              },
            },
            '& .MuiInputBase-input': { fontSize: '1.7em' },
          }}
        />

        <Button
          variant="contained"
          onSubmit={handleGetAutoInfo}
          className={classes.MuiButtonBaseRootMuiButtonRootFormBtn}
        >
          Подтвердить
        </Button>
      </Box>
    </Container>
  );
};
