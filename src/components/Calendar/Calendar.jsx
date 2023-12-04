import React from 'react';
import { useStyles } from './CalendarStyles';
import { getStylesCalendar } from './constants';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

const year = [
  {
    nameMonth: 'Января',
    monthIndex: 0,
    numberOfDays: 31,
  },
  {
    nameMonth: 'Февраля',
    monthIndex: 1,
    numberOfDays: 28,
  },
  {
    nameMonth: 'Марта',
    monthIndex: 2,
    numberOfDays: 31,
  },
  {
    nameMonth: 'Апреля',
    monthIndex: 3,
    numberOfDays: 30,
  },
  {
    nameMonth: 'Мая',
    monthIndex: 4,
    numberOfDays: 28,
  },
  {
    nameMonth: 'Июня',
    monthIndex: 5,
    numberOfDays: 30,
  },
  {
    nameMonth: 'Июля',
    monthIndex: 6,
    numberOfDays: 31,
  },
  {
    nameMonth: 'Августа',
    monthIndex: 7,
    numberOfDays: 31,
  },
  {
    nameMonth: 'Сентября',
    monthIndex: 8,
    numberOfDays: 30,
  },
  {
    nameMonth: 'Октября',
    monthIndex: 9,
    numberOfDays: 31,
  },
  {
    nameMonth: 'Ноября',
    monthIndex: 10,
    numberOfDays: 30,
  },
  {
    nameMonth: 'Декабря',
    monthIndex: 11,
    numberOfDays: 31,
  },
];
// const monthIndex = `${year.month}`;

const days = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

const week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
export const Calendar = ({ className, onSubmit }) => {
  const classes = useStyles();

  const handleGetDay = (event) => {
    console.log(event.target);
  };

  return (
    <div className={classNames(classes.calendarScheme, className)}>
      <h3 className={classes.calendarTitle}>Month</h3>
      <div className={classes.mo}>{week[0]}</div>
      <div className={classes.tu}>{week[1]}</div>
      <div className={classes.we}>{week[2]}</div>
      <div className={classes.th}>{week[3]}</div>
      <div className={classes.fr}>{week[4]}</div>
      <div className={classes.sa}>{week[5]}</div>
      <div className={classes.su}>{week[6]}</div>

      {days.map((day, index) => {
        return (
          <div
            key={index}
            style={getStylesCalendar(days)[index]}
            onClick={handleGetDay}
          >
            {day}
          </div>
        );
      })}
      <Button
        variant="contained"
        onSubmit={onSubmit}
        className={classes.MuiButtonBaseRootMuiButtonRootFormBtn}
      >
        Подтвердить
      </Button>
    </div>
  );
};
Calendar.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
};
