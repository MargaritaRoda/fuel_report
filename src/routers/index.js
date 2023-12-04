import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { SystemLayout } from '../components/SystemLayout/SystemLayout';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { UserEnter } from '../pages/UserEnter';
import { AutoInfo } from '../pages/AutoInfo';
import { InitialAutoData } from '../pages/InitialAutoData';
import { FuelTripData } from '../pages/FuelTripData';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<SystemLayout />}>
      <Route errorElement={<ErrorBoundary />}>
        <Route path="/" element={<UserEnter />} />
        <Route path="/AutoInfo" element={<AutoInfo />} />
        <Route path="/InitialAutoData" element={<InitialAutoData />} />
        <Route path="/FuelTripData" element={<FuelTripData />} />
      </Route>
    </Route>,
  ),
);
