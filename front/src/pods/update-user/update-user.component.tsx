import React from 'react';
import { Header } from '@/common-app';
import { UpdateUserData } from './components';
import * as classes from './update-user.styles';

export const UpdateUser: React.FC = () => {

  return (
    <classes.Div>
      <Header />
      <UpdateUserData />
    </classes.Div>
  );
}
