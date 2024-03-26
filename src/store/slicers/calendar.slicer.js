import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = [];

const removeElement = (nums, val) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      for (let j = i + 1; j < nums.length; j++) {
        nums[j - 1] = nums[j];
      }
      nums.length--;
      i--;
    }
  }
  return nums.sort((a,b) => a-b);
};

const calendar = createSlice({
  name: 'calendar',
  initialState: INITIAL_STATE,
  reducers: {
    toggleCalendarDay: (state, { payload: newDay }) => {
      const newState = [...state];
      const isDateNotUnique = newState.some((day) => {
        return day === newDay;
      });
      if (isDateNotUnique) {
        return removeElement([...state], newDay); // добавить действие по удалению даты при повторном нажатии
      }

      return  [...state, newDay].sort((a,b) => a-b);


    },
  },
});
const { actions } = calendar;
export const { toggleCalendarDay } = actions;
export default calendar;
