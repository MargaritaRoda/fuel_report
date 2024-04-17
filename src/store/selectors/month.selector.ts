import { RootState } from '../index';
import { createSelector } from 'reselect';

export const selectMonthForCalculation = (state: RootState) => {
  return state.month;
};

//const rawDataSelector = state => state.rawData;

export const selectMonthForRender = createSelector(
  [selectMonthForCalculation],
  (month) => {
    if (month.numberMonth <= 9) {
      return {
        nameMonth: month.nameMonth,
        numberMonth: `0${month.numberMonth + 1}`,
      };
    }
    return {
      nameMonth: month.nameMonth,
      numberMonth: (month.numberMonth + 1).toString(),
    };
  },
);
