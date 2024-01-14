import React from 'react';
import { Header } from '@/common-app';
import { AllUsers } from './components';
import * as classes from './dashboard.styles';

export const Dashboard: React.FC = () => {

  return (
    <classes.Div>
      <Header />
      <AllUsers />
    </classes.Div>
  );
}
