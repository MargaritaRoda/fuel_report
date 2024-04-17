import { RootState } from '../index';
import { createSelector } from 'reselect';

export const daysSelector = (state: RootState) => {
  return state.calendar;
};

export const daysSelectorForRender = createSelector(
  [daysSelector],
  (calendar) => {
    return calendar.map((day) => {
      return day <= 9 ? `0${day}` : `${day}`;
    });
  },
);
