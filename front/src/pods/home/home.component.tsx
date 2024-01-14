import React from 'react';
import { Header } from '@/common-app';
import { LoginForm } from './components';
import * as classes from './home.styles';

export const HomeComponent: React.FC = () => {


  return (
    <classes.Div>
      <Header />
      <h1>Home Page</h1>
      <LoginForm />
    </classes.Div>
  );
}
