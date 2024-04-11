import React, { FormEvent } from 'react';
import { Container } from '../../components/Container';
import Button from '@mui/material/Button';
import { useStyles } from './FuelTripDataStyles';
import {
  FormControl,
  Input,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { daysSelector } from '../../store/selectors/days.selector';
import { selectMonthForRender } from '../../store/selectors/month.selector';
import { setFuelTripData } from '../../store/slicers/fuelTripData.slicer';
import { FormDataObject } from '../../store/slicers/fuelTripTypes';
import { useNavigate } from 'react-router-dom';

export const FuelTripData = () => {
  const classes = useStyles();
  const ariaLabel = { 'aria-label': 'description' };

  const days: number[] = useSelector(daysSelector);
  const selectedMonth = useSelector(selectMonthForRender);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const days = selectedDays.sort((a,b) => a-b);

  const handleGetFuelTripData = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData);
    const data: FormDataObject = {};

    formData.forEach((value, key) => {
      const [day, field] = key.split(' ');
      if (!data[day]) {
        data[day] = {
          destination: '',
          distance: '',
          fuel: '',
        };
      }
      switch (field) {
        case 'destination':
          data[day].destination = value.toString();
          break;
        case 'distance':
          data[day].distance = value.toString();
          break;
        case 'fuel':
          data[day].fuel = value.toString();
          break;
      }
    });
    // console.log(data);

    dispatch(setFuelTripData(data));
    navigate('/FuelReport');
  };

  return (
    <Container className={classes.FuelTripContainer}>
      <Button
        variant="contained"
        sx={{
          maxWidth: 'fit-content',
          placeSelf: 'left',
          margin: '16px',
          height: '3em',
        }}
      >
        Вернуться на предыдущий этап
      </Button>

      <form
        className={classes.tableForm}
        onSubmit={handleGetFuelTripData}
        method="get"
      >
        <Table
          sx={{
            maxWidth: 'fit-content',
            backgroundColor: 'white',
            height: '100%',
            gridArea: '2/1',
            placeSelf: 'center',
            border: 'solid 2px gray',
          }}
          aria-label="simple table"
        >
          <FormControl>
            <TableHead
              sx={{ borderBottom: 'solid 1px gray', fontSize: '1.4em' }}
            >
              <TableRow>
                <TableCell align="center">Дата</TableCell>
                <TableCell align="center" sx={{ width: '300px' }}>
                  Количество заправленного топлива (л)
                </TableCell>
                <TableCell align="center" sx={{ width: '290px' }}>
                  Командировочный город
                </TableCell>
                <TableCell align="center" sx={{ width: '290px' }}>
                  Пробег (км)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {days.map((day: number, index: number) => (
                <TableRow key={index}>
                  <TableCell align="center">{`${day}.${selectedMonth.numberMonth}`}</TableCell>
                  <TableCell component="th" scope="row">
                    <Input
                      name={`${day} fuel`}
                      placeholder="30"
                      inputProps={ariaLabel}
                      sx={{ width: '290px' }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Input
                      name={`${day} destination`}
                      placeholder="Борисов"
                      inputProps={ariaLabel}
                      sx={{ width: '290px' }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Input
                      name={`${day} distance`}
                      placeholder="130"
                      inputProps={ariaLabel}
                      sx={{ width: '290px' }}
                    />
                  </TableCell>
                </TableRow>
              ))}
              <Button
                variant="contained"
                type="submit"
                //onSubmit={handleGetFuelTripData}
                sx={{
                  maxWidth: 'fit-content',
                  placeSelf: 'left',
                  margin: '16px',
                }}
              >
                Подтвердить
              </Button>
            </TableBody>
          </FormControl>
        </Table>
      </form>
    </Container>
  );
};
