import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = 0;

const mileage = createSlice({
  name: 'mileage',
  initialState: INITIAL_STATE,
  reducers: {
    setMileage: (state, { payload: mileage }) => mileage,
  },
});
const { actions } = mileage;
export const { setMileage } = actions;
export default mileage;
