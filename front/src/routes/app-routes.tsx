import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { CreateUserLayout, DashboardLayout, DeleteUserLayout, HomeLayout, UpdateUserLayout } from '@/layouts';
import { AdminRoutes, PrivateRoutes, PublicRoutes } from './router-path';
import { SwitchRoutes } from './interface';


export const AppRoutes: React.FC = () => {
  
  return (
    <>
      {/* Public Routes */}
      <Routes>
        <Route path={SwitchRoutes?.root} element={<PublicRoutes />}>
          <Route path={SwitchRoutes?.root} element={<HomeLayout />} />
          <Route path={SwitchRoutes?.createUser} element={<CreateUserLayout />} />
        </Route>

        {/* Private Routes */}
        <Route path={SwitchRoutes?.dashboard} element={<PrivateRoutes />}>
          <Route path={SwitchRoutes?.dashboard} element={<DashboardLayout />} />
          <Route path={SwitchRoutes?.updateUser + "/:id"} element={<UpdateUserLayout />}/>
          <Route path={SwitchRoutes?.deleteUser + "/:id"} element={<DeleteUserLayout />}/>
          
        </Route>
        {/* Admin Routes */}
        <Route path={SwitchRoutes.adminPage} element={<AdminRoutes />}>
          <Route path={SwitchRoutes?.adminPage} element={<h1>Admin</h1>} />
        </Route>
      </Routes>
    </>
  );
}
