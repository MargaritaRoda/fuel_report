import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { SystemLayout } from '../components/SystemLayout/SystemLayout.tsx';
import { ErrorBoundary } from '../components/ErrorBoundary/ErrorBoundary.tsx';
import { UserEnter } from '../pages/UserEnter/UserEnter.tsx';
import { AutoInfo } from '../pages/AutoInfo/AutoInfo.tsx';
import { InitialAutoData } from '../pages/InitialAutoData/InitialAutoData.tsx';
import { FuelTripData } from '../pages/FuelTripData/FuelTripData.tsx';
import { FuelReport } from '../pages/FuelReport/FuelReport.tsx';
import {
  AUTO_INFO,
  FUEL_REPORT,
  FUEL_TRIP_DATA,
  INDEX,
  INITIAL_AUTO_DATA,
} from '../constants.ts';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<SystemLayout />}>
      <Route errorElement={<ErrorBoundary />}>
        <Route path={INDEX} element={<UserEnter />} />
        <Route path={AUTO_INFO} element={<AutoInfo />} />
        <Route path={INITIAL_AUTO_DATA} element={<InitialAutoData />} />
        <Route path={FUEL_TRIP_DATA} element={<FuelTripData />} />
        <Route path={FUEL_REPORT} element={<FuelReport />} />
      </Route>
    </Route>,
  ),
);
