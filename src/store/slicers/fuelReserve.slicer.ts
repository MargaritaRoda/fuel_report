import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = 0;

const fuelReserve = createSlice({
  name: 'fuelReserve',
  initialState: INITIAL_STATE,
  reducers: {
    setFuelReserve: (state, { payload: fuelReserve }) => {
      return fuelReserve ? fuelReserve : 1;
    },
  },
});
const { actions } = fuelReserve;
export const { setFuelReserve } = actions;
export default fuelReserve;
