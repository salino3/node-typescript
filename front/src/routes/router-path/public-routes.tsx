import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UsersFunctions } from '@/core';
import { SwitchRoutes } from '../interface';

export const PublicRoutes: React.FC = () => {
  const { getToken } = UsersFunctions();
  const token = getToken();

  if (token) {
    return <Navigate to={SwitchRoutes.dashboard} />;
  };

  return <Outlet />;
}
