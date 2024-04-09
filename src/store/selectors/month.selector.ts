import { RootState } from '../index';

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
