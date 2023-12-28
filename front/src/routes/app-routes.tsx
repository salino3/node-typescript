import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { SwitchRoutes } from './interface';
import { HomeLayout } from '@/layouts';

export const AppRoutes: React.FC = () => {
  
  return (
    <>
      <Routes>
        <Route path={SwitchRoutes?.root} element={<HomeLayout />} />
      </Routes>
    </>
  );
}
