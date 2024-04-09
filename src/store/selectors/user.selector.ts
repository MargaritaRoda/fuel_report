import { RootState } from '../index';

export const selectUser = (state: RootState) => {
  return state.user;
};
