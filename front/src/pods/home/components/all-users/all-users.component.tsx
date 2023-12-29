import React from 'react';
import { GlobalContext, MyState, UsersAllData } from '@/core';
import { CardAllUsers } from '@/common-app';
import * as classes from './all-user.styles';

export const AllUsers: React.FC = () => {

    const { state } = React.useContext<MyState>(GlobalContext);
    const {users} = state;

    console.log("State: ", state);

  return (
    <div className={classes.container}>
      <h2>Users List</h2>
      <div>
        {!users || users.length == 0 ? <h3>there are no users..</h3> 
        : users && users?.map((user: UsersAllData) => (
         <CardAllUsers
           user={user}
           key={user.id}
           />
        ))  
        }
      </div>
    </div>
  );
}
