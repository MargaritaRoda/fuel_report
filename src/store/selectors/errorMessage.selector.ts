import { RootState } from '../index';
import { ErrorMes } from '../slicers/errorMessage.slicer';

export const selectorErrorMessage = (state: RootState): ErrorMes[] => {
  return state.errorMessage;
};
