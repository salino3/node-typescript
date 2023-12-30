import React from 'react';
import { AddUserForm, AllUsers, LoginForm } from './components';
import { Logout } from './components/logout-button';
import * as classes from './home.styles';

export const HomeComponent: React.FC = () => {



  return (
    <classes.Div>
      <h1>Home Page</h1>
      <details className={classes.detailsHome}>
        <summary>Form</summary>
        <AddUserForm />
      </details>
      <details className={classes.detailsHome}>
        <summary>All Users</summary>
        <AllUsers />
      </details>
      <details className={classes.detailsHome}>
        <summary>Login User</summary>
        <LoginForm />
      </details>
      <details open className={classes.detailsHome}>
        <summary>Logout</summary>
        <Logout />
      </details>
    </classes.Div>
  );
}
