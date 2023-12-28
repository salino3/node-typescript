import React from 'react';
import { GlobalContext, MyState } from '@/core';
import { AddUserForm, AllUsers } from './components';
import * as classes from './home.styles';

export const HomeComponent: React.FC = () => {

  const {state} = React.useContext<MyState>(GlobalContext);

  console.log("State: ", state);

  return (
    <classes.Div>
      <h1>Home Page</h1>
      <details className={classes.detailsHome}>
        <summary>Form</summary>
        <AddUserForm />
      </details>
      <details open className={classes.detailsHome}>
        <summary>All Users</summary>
        <AllUsers />
      </details>
    </classes.Div>
  );
}
