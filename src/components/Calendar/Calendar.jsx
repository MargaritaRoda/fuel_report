import React from 'react';
import {useStyles} from './CalendarStyles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import {useDispatch, useSelector} from 'react-redux';
import {selectMonth} from '../../store/selectors/month.selector';
import {toggleCalendarDay} from '../../store/slicers/calendar.slicer';
import {daysSelector} from '../../store/selectors/days.selector';
import {getDaysOfMonthUserSelected, getStylesCalendar} from './constants';
import {selectYear} from '../../store/selectors/year.selector';

// const year = [
//   {
//     nameMonth: 'Января',
//     monthIndex: 0,
//     numberOfDays: 31,
//   },
//   {
//     nameMonth: 'Февраля',
//     monthIndex: 1,
//     numberOfDays: 28,
//   },
//   {
//     nameMonth: 'Марта',
//     monthIndex: 2,
//     numberOfDays: 31,
//   },
//   {
//     nameMonth: 'Апреля',
//     monthIndex: 3,
//     numberOfDays: 30,
//   },
//   {
//     nameMonth: 'Мая',
//     monthIndex: 4,
//     numberOfDays: 28,
//   },
//   {
//     nameMonth: 'Июня',
//     monthIndex: 5,
//     numberOfDays: 30,
//   },
//   {
//     nameMonth: 'Июля',
//     monthIndex: 6,
//     numberOfDays: 31,
//   },
//   {
//     nameMonth: 'Августа',
//     monthIndex: 7,
//     numberOfDays: 31,
//   },
//   {
//     nameMonth: 'Сентября',
//     monthIndex: 8,
//     numberOfDays: 30,
//   },
//   {
//     nameMonth: 'Октября',
//     monthIndex: 9,
//     numberOfDays: 31,
//   },
//   {
//     nameMonth: 'Ноября',
//     monthIndex: 10,
//     numberOfDays: 30,
//   },
//   {
//     nameMonth: 'Декабря',
//     monthIndex: 11,
//     numberOfDays: 31,
//   },
// ];

const week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];



export const Calendar = ({ className }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const selectedDays = useSelector(daysSelector)


  const selectedMonth = useSelector(selectMonth);
  const selectedYear = useSelector(selectYear);
  const days = getDaysOfMonthUserSelected(
    selectedYear,
    selectedMonth.numberMonth,
  );



  const handleGetDay = (event) => {
    const newDay = parseInt(event.target.innerText); // type number
    dispatch(toggleCalendarDay( newDay ));
  };




  return (
    <div className={classNames(classes.calendarScheme, className)}>
      <h3 className={classes.calendarTitle}>{selectedMonth.nameMonth}</h3>
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
            className={classNames((selectedDays.includes(day)) && classes.dateActive, classes.dayHover)}
            key={index}
            style={
              getStylesCalendar(days, selectedYear, selectedMonth.numberMonth)[
                index
              ]
            }
            onClick={handleGetDay}
          >
            {day}
          </div>
        );
      })}

      {/*<Button*/}
      {/*  variant="contained"*/}
      {/*  onSubmit={handleCloseCalendar}*/}
      {/*  className={classes.MuiButtonBaseRootMuiButtonRootFormBtn}*/}
      {/*>*/}
      {/*  Подтвердить*/}
      {/*</Button>*/}
    </div>
  );
};
Calendar.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
};
