import { RootState } from '../index';
import { createSelector } from 'reselect';

export const selectMonthForRender = (state: RootState) => {
  if (state.month.numberMonth <= 9) {
    return {
      nameMonth: state.month.nameMonth,
      numberMonth: `0${state.month.numberMonth + 1}`,
    };
  }
  return {
    nameMonth: state.month.nameMonth,
    numberMonth: (state.month.numberMonth + 1).toString(),
  };
};
export const selectMonthForCalculation = (state: RootState) => {
  return state.month;
};

//const rawDataSelector = state => state.rawData;

export const transformedDataSelector = createSelector(
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
    // Perform your transformation on rawData here
    // const transformedData = /* Your transformation logic */;
    // return transformedData;
  },
);
