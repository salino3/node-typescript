import React from 'react';
import * as classes from './all-user.styles';
import { GlobalContext, MyState } from '@/core';

export const AllUsers: React.FC = () => {

    const { state } = React.useContext<MyState>(GlobalContext);

    console.log("State: ", state);

  return (
    <div className={classes.container}>
      <h2>Users List</h2>
      <div>

      </div>

    </div>
  );
}
