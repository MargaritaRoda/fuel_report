import { RootState } from '../index';

export const selectorMileage = (state: RootState) => {
  return state.mileage;
};
