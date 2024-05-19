import { Action, configureStore, isPlain } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import user from './slicers/user.slicer';
import auto from './slicers/auto.slicer';
import license from './slicers/license.slicer';
import month from './slicers/month.slicer';
import year from './slicers/year.slicer';
import mileage from './slicers/mileage.slicer';
import calendar from './slicers/calendar.slicer';
import fuelReserve from './slicers/fuelReserve.slicer';
import fuelTripData from './slicers/fuelTripData.slicer';
import { FormDataItem } from './slicers/fuelTripTypes';
import errorMessage, { ErrorMes } from './slicers/errorMessage.slicer';

export interface RootState {
  year: number;
  fuelTripData: FormDataItem[];
  license: string;
  month: {
    numberMonth: number;
    nameMonth: string;
  };
  user: {
    email: string;
    username: string;
  };
  calendar: number[];
  fuelReserve: number;
  auto: string;
  mileage: number;
  errorMessage: ErrorMes[];
}

const rootReducer = combineReducers({
  [user.name]: user.reducer,
  [auto.name]: auto.reducer,
  [license.name]: license.reducer,
  [month.name]: month.reducer,
  [year.name]: year.reducer,
  [mileage.name]: mileage.reducer,
  [fuelReserve.name]: fuelReserve.reducer,
  [calendar.name]: calendar.reducer,
  [fuelTripData.name]: fuelTripData.reducer,
  [errorMessage.name]: errorMessage.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: [apiSlice.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ignoreActions: ['persist/PERSIST'],
      },
    });
    // middlewares.push(apiSlice.middleware);
    return middlewares;
  },
});

export const persistor = persistStore(store);
