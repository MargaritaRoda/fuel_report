import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormDataItem, FormDataObject } from './fuelTripTypes';

const INITIAL_STATE: FormDataItem[] = [];

const autoCompleteObjKey = (
  obj: FormDataObject,
  baseCity: string,
): {
  startDestination: string;
  destination: string;
  distance: number;
  fuel: number;
}[] => {
  const res: {
    startDestination: string;
    destination: string;
    distance: number;
    fuel: number;
  }[] = [];

  for (const key in obj) {
    const currentItem = obj[key];
    const newObject = {
      startDestination: currentItem.startDestination || baseCity,
      destination: currentItem.destination || baseCity,
      distance: parseFloat(currentItem.distance) || 0,
      fuel: parseFloat(currentItem.fuel) || 0,
    };

    res.push(newObject);
  }
  return res;
};

const fuelTripData = createSlice({
  name: 'fuelTripData',
  initialState: INITIAL_STATE,
  reducers: {
    setFuelTripData: (state, action: PayloadAction<FormDataObject>) => {
      return [...autoCompleteObjKey(action.payload, 'Минск')];
    },
  },
});
const { actions } = fuelTripData;
export const { setFuelTripData } = actions;
export default fuelTripData;
