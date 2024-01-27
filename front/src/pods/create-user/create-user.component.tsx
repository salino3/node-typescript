import React from 'react';
import { Header } from '@/common-app';
import { AddUserForm } from './components';
import * as classes from './create-user.styles';


export const CreateUser: React.FC = () => {

  return (
    <classes.Div>
      <Header />
      <AddUserForm />
    </classes.Div>
  );
}
