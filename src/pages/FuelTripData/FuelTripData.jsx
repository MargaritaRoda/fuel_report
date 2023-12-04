import React from 'react';
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

const days = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];
const ariaLabel = { 'aria-label': 'description' };

export const FuelTripData = () => {
  const classes = useStyles();

  const handleGetFuelTripData = () => {};
  return (
    <Container className={classes.FuelTripContainer}>
      <Button
        variant="contained"
        sx={{ maxWidth: 'fit-content', placeSelf: 'left', margin: '16px' }}
      >
        Вернуться на предыдущий этап
      </Button>

      <div className={classes.tableForm}>
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
              {days.map((day, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{day}</TableCell>
                  <TableCell component="th" scope="row">
                    <Input
                      placeholder="30"
                      inputProps={ariaLabel}
                      sx={{ width: '290px' }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Input
                      placeholder="Борисов"
                      inputProps={ariaLabel}
                      sx={{ width: '290px' }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Input
                      placeholder="130"
                      inputProps={ariaLabel}
                      sx={{ width: '290px' }}
                    />
                  </TableCell>
                </TableRow>
              ))}
              <Button
                variant="contained"
                onSubmit={handleGetFuelTripData}
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
      </div>
    </Container>
  );
};
