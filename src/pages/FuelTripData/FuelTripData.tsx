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
import { selectMonth } from '../../store/selectors/month.selector';
import { setFuelTripData } from '../../store/slicers/fuelTripData.slicer';
import { FormDataObject } from '../../store/slicers/fuelTripTypes';

// const days = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//   23, 24, 25, 26, 27, 28, 29, 30,
// ];

// const autoCompleteObjKey = (obj, fuel, distance, baseCity) => {
//     for (let key in obj) {
//         if (key.includes(fuel)) {
//             if (obj[key] === '') {
//                 obj[key] = '0'
//             }
//         }
//         if (key.includes(distance)) {
//             if(obj[key] === '') {
//                 obj[key] = baseCity
//             }
//         }
//     }
//     return obj
// }
//
// const divideObj = (obj, arr) => {
//     let res = [];
//     for (let i = 0; i<arr.length; i++) {
//         const currentObj = {}
//         let currentKey = arr[i]
//         for (let key in obj) {
//             const changedKey = parseInt(key)
//             if (changedKey === currentKey) {
//                 currentObj[key]= obj[key]
//             }
//         }
//         res.push(currentObj)
//     }
//     return res;
// }

export const FuelTripData = () => {
  const classes = useStyles();
  const ariaLabel = { 'aria-label': 'description' };

  const days: number[] = useSelector(daysSelector);
  const selectedMonth = useSelector(selectMonth);
  const dispatch = useDispatch();

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
      // if (field === 'destination') {
      //   data[day].destination = value.toString();
      // } else if (field === 'distance') {
      //   data[day].distance = value.toString();
      // } else if (field === 'fuel') {
      //   data[day].fuel = value.toString();
      // }
    });
    console.log(data);

    dispatch(setFuelTripData(data));
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
