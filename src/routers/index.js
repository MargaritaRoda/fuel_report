import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { SystemLayout } from '../components/SystemLayout/SystemLayout.jsx';
import { ErrorBoundary } from '../components/ErrorBoundary/ErrorBoundary.tsx';
import { UserEnter } from '../pages/UserEnter/UserEnter.tsx';
import { AutoInfo } from '../pages/AutoInfo/AutoInfo.tsx';
import { InitialAutoData } from '../pages/InitialAutoData/InitialAutoData.tsx';
import { FuelTripData } from '../pages/FuelTripData/FuelTripData.tsx';
import { FuelReport } from '../pages/FuelReport/FuelReport.tsx';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<SystemLayout />}>
      <Route errorElement={<ErrorBoundary />}>
        <Route path="/" element={<UserEnter />} />
        <Route path="/AutoInfo" element={<AutoInfo />} />
        <Route path="/InitialAutoData" element={<InitialAutoData />} />
        <Route path="/FuelTripData" element={<FuelTripData />} />
        <Route path="/FuelReport" element={<FuelReport />} />
      </Route>
    </Route>,
  ),
);
