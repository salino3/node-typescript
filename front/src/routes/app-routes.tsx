import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { SwitchRoutes } from './interface';
import { HomeLayout } from '@/layouts';
import { UpdateUser } from '@/pods/home/components';

export const AppRoutes: React.FC = () => {
  
  return (
    <>
      <Routes>
        <Route path={SwitchRoutes?.root} element={<HomeLayout />} />
        <Route path={SwitchRoutes?.updateUser + '/:id'} element={<UpdateUser />} />
      </Routes>
    </>
  );
}
