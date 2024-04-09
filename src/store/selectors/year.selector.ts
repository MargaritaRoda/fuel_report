import { RootState } from '../index';

export const selectYear = (state: RootState) => {
  return state.year;
};
