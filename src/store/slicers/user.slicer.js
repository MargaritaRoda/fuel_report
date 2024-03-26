import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  username: '',
  email: '',
};

const user = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    login: (state, { payload: { username, email } }) => ({
      username,
      email,
    }),
  },
});
const { actions } = user;
export const { login } = actions;
export default user;
