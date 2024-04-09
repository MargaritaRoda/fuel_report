import React, { ReactNode, useState } from 'react';

import Button from '@mui/material/Button';
import { Container } from '../../components/Container';
import { useStyles } from './InitialAutoDataStyles';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { Calendar } from '../../components/Calendar/Calendar';
import { useDispatch, useSelector } from 'react-redux';
import { addMonth } from '../../store/slicers/month.slicer';
import { addYear } from '../../store/slicers/year.slicer';
import { daysSelector } from '../../store/selectors/days.selector';
import { setMileage } from '../../store/slicers/mileage.slicer';
import { setFuelReserve } from '../../store/slicers/fuelReserve.slicer';
import { selectorMileage } from '../../store/selectors/mileage.selector';
import { selectorFuelReserve } from '../../store/selectors/fuelReserve.selector';
import { useNavigate } from 'react-router-dom';

export const InitialAutoData = () => {
  const classes = useStyles();
  const regExp = new RegExp(/^-?(0|[1-9]+)(?:[.,]\d{1,2}|)$/);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selectedDays = useSelector(daysSelector);
  const selectedMileage = useSelector(selectorMileage);
  const selectedFuelReserve = useSelector(selectorFuelReserve);
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleChangeMonth = (
    event: SelectChangeEvent<string>,
    child: ReactNode,
  ) => {
    setMonth(event.target.value);
    const objMonth = JSON.parse(event.target.value);
    dispatch(
      addMonth({
        nameMonth: objMonth.nameMonth,
        numberMonth: parseInt(objMonth.numberMonth),
      }),
    );
    // console.log(objMonth);
  };
  const handleChangeYear = (
    event: SelectChangeEvent<string>,
    child: ReactNode,
  ) => {
    setYear(event.target.value);
    dispatch(addYear(parseInt(event.target.value)));
  };

  const handleSetMileage = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const numMileage = parseInt(event.target.value);
    if (regExp.test(String(numMileage))) {
      dispatch(setMileage(numMileage));
    }
  };

  const handleSetFuelReserve = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const strFuelReverse = event.target.value.replace(',', '.');
    const numFuelReserve = parseFloat(strFuelReverse);
    console.log(regExp.test(event.target.value));
    if (regExp.test(String(numFuelReserve)) && numFuelReserve <= 55) {
      dispatch(setFuelReserve(numFuelReserve));
    }
  };

  const handleGetAutoInfo = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (selectedDays && selectedMileage && selectedFuelReserve) {
      navigate('/FuelTripData');
    }
  };

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
          name="mileage"
          label="Начальный показатель спидометра"
          variant="outlined"
          required={true}
          placeholder="12345"
          onChange={handleSetMileage}
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
          id="fuelReserve"
          name="fuelReserve"
          label="Остаток топлива с прошлого месяца"
          variant="outlined"
          required={true}
          placeholder="7,34"
          onChange={handleSetFuelReserve}
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
              onChange={handleChangeMonth}
            >
              <MenuItem value={'{"nameMonth": "Январь", "numberMonth": "0"}'}>
                Январь
              </MenuItem>
              <MenuItem value={'{"nameMonth": "Февраль", "numberMonth": "1"}'}>
                Февраль
              </MenuItem>
              <MenuItem value={'{"nameMonth": "Март", "numberMonth": "2"}'}>
                Март
              </MenuItem>
              <MenuItem value={'{"nameMonth": "Апрель", "numberMonth": "3"}'}>
                Апрель
              </MenuItem>
              <MenuItem value={'{"nameMonth": "Май", "numberMonth": "4"}'}>
                Май
              </MenuItem>
              <MenuItem value={'{"nameMonth": "Июнь", "numberMonth": "5"}'}>
                Июнь
              </MenuItem>
              <MenuItem value={'{"nameMonth": "Июль", "numberMonth": "6"}'}>
                Июль
              </MenuItem>
              <MenuItem value={'{"nameMonth": "Август", "numberMonth": "7"}'}>
                Август
              </MenuItem>
              <MenuItem value={'{"nameMonth": "Сентябрь", "numberMonth": "8"}'}>
                Сентябрь
              </MenuItem>
              <MenuItem value={'{"nameMonth": "Октябрь", "numberMonth": "9"}'}>
                Октябрь
              </MenuItem>
              <MenuItem value={'{"nameMonth": "Ноябрь", "numberMonth": "10"}'}>
                Ноябрь
              </MenuItem>
              <MenuItem value={'{"nameMonth": "Декабрь", "numberMonth": "11"}'}>
                Декабрь
              </MenuItem>
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
          type="button"
          onClick={handleGetAutoInfo}
          className={classes.MuiButtonBaseRootMuiButtonRootFormBtn}
        >
          Подтвердить
        </Button>
      </Box>
      {month && year ? (
        <Calendar className={classes.formCalendarInitial} />
      ) : null}
    </Container>
  );
};
