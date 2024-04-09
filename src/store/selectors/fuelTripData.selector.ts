import { RootState } from '../index';

export const selectorFuelTripData = (state: RootState) => {
  return state.fuelTripData;
};
