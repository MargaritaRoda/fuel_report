import { RootState } from '../index';

export const daysSelector = (state: RootState) => {
  return state.calendar;
};
