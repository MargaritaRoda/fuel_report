import { RootState } from '../index';

export const selectorFuelReserve = (state: RootState) => {
  return state.fuelReserve;
};
