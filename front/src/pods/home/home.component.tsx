import React from 'react';
import { AddUserForm, AllUsers, GetOneUser, Logout, LoginForm, DeleteProfile, DeleteProfileByAdmin } from './components';
import { Header } from '@/common-app';
import * as classes from './home.styles';

export const HomeComponent: React.FC = () => {


  return (
    <classes.Div>
      <Header />
      <h1>Home Page</h1>
     
    </classes.Div>
  );
}


