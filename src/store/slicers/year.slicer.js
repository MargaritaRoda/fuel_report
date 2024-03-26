import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = 0 ;

const year = createSlice({
    name: 'year',
    initialState: INITIAL_STATE,
    reducers: {
        addYear: (state, { payload: year }) => ( year ),
    },
});
const { actions } = year;
export const { addYear } = actions;
export default year;
