import { RootState } from '../index';

export const selectLicense = (state: RootState) => {
  return state.license;
};
