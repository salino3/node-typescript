import React, { useContext } from 'react';
import { GlobalContext, MyState } from '@/core';
import { AddUserForm } from './components';
import * as classes from './home.styles';

export const HomeComponent: React.FC = () => {

  const {state} = useContext<MyState>(GlobalContext);

  // console.log("State: ", state);

  return (
    <classes.Div>
      <h1>Home Page</h1>
      <details open className={classes.detailsHome}>
        <summary>
          Form
        </summary>
        <AddUserForm />
      </details>
    </classes.Div>
  )
}
