import React from 'react';

import Button from '@mui/material/Button';
import { Container } from '../../components/Container';
import { useStyles } from './InitialAutoDataStyles';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { Calendar } from '../../components/Calendar';

export const InitialAutoData = () => {
  const [month, setMonth] = React.useState('');
  const [year, setYear] = React.useState('');

  const handleChange = (event) => {
    setMonth(event.target.value);
    console.log(parseInt(event.target.value));
  };
  const handleChangeYear = (event) => {
    setYear(event.target.value);
  };

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
        <h3 className={classes.formTitle}>Введите начальные показатели</h3>
        <TextField
          id="mileage"
          label="Начальный показатель спидометра"
          variant="outlined"
          required={true}
          placeholder="12345"
          helperText="Введите начальный показатель спидометра"
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
          id="fuelReserv"
          label="Остаток топлива с прошлого месяца"
          variant="outlined"
          required={true}
          placeholder="7,34"
          helperText="Введите остаток топлива с прошлого месяца"
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

        <Box
          sx={{
            minWidth: 120,
            display: 'inline-flex',
            gap: '1em',
          }}
        >
          <FormControl sx={{ flex: 1 }}>
            <InputLabel id="month">Месяц</InputLabel>
            <Select
              labelId="month"
              id="month"
              value={month}
              label="month"
              onChange={handleChange}
            >
              <MenuItem value={'0'}>Январь</MenuItem>
              <MenuItem value={'1'}>Февраль</MenuItem>
              <MenuItem value={'2'}>Март</MenuItem>
              <MenuItem value={'3'}>Апрель</MenuItem>
              <MenuItem value={'4'}>Май</MenuItem>
              <MenuItem value={'5'}>Июнь</MenuItem>
              <MenuItem value={'6'}>Июль</MenuItem>
              <MenuItem value={'7'}>Август</MenuItem>
              <MenuItem value={'8'}>Сентябрь</MenuItem>
              <MenuItem value={'9'}>Октябрь</MenuItem>
              <MenuItem value={'10'}>Ноябрь</MenuItem>
              <MenuItem value={'11'}>Декабрь</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ flex: 1 }}>
            <InputLabel id="year">Год</InputLabel>
            <Select
              labelId="year"
              id="year"
              value={year}
              label="year"
              onChange={handleChangeYear}
            >
              <MenuItem value={'2023'}>2023</MenuItem>
              <MenuItem value={'2024'}>2024</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Button
          variant="contained"
          onSubmit={handleGetAutoInfo}
          className={classes.MuiButtonBaseRootMuiButtonRootFormBtn}
        >
          Подтвердить
        </Button>
      </Box>
      <Calendar className={classes.formCalendarInitial} />
    </Container>
  );
};
