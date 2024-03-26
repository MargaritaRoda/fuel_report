import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = '' ;

const auto = createSlice({
  name: 'auto',
  initialState: INITIAL_STATE,
  reducers: {
    addAuto: (state, { payload: auto }) => ( auto ),
  },
});
const { actions } = auto;
export const { addAuto } = actions;
export default auto;
