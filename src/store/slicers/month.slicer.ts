import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = { nameMonth: '', numberMonth: 0 };

const month = createSlice({
  name: 'month',
  initialState: INITIAL_STATE,
  reducers: {
    addMonth: (state, { payload: { nameMonth, numberMonth } }) => ({
      nameMonth,
      numberMonth: numberMonth,
    }),
  },
});
const { actions } = month;
export const { addMonth } = actions;
export default month;
