import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = '' ;

const license = createSlice({
    name: 'license',
    initialState: INITIAL_STATE,
    reducers: {
        addLicense: (state, { payload: license }) => ( license ),
    },
});
const { actions } = license;
export const { addLicense } = actions;
export default license;
