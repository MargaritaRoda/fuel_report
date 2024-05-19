import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ErrorMes {
  errorMessage: string;
}

const INITIAL_STATE: ErrorMes[] = [];

const errorMessage = createSlice({
  name: 'errorMessage',
  initialState: INITIAL_STATE,
  reducers: {
    addErrorMessage: (state, action: PayloadAction<ErrorMes>) => {
      const newState = [...state];
      newState.push({ errorMessage: action.payload.errorMessage });
      return newState;
    },
    removeErrorMessage: (state) => INITIAL_STATE,
  },
});
const { actions } = errorMessage;
export const { addErrorMessage, removeErrorMessage } = actions;
export default errorMessage;
