import { RootState } from '../index';

export const daysSelector = (state: RootState) => {
  return state.calendar;
};

export const daysSelectorForRender = (state: RootState) => {
  return state.calendar.map((day) => {
    return day <= 9 ? `0${day}` : `${day}`;
  });
};
