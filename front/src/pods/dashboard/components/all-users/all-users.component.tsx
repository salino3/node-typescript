import React from 'react';
import { GlobalContext, MyState, UsersAllData } from '@/core';
import { CardAllUsers } from '@/common-app';
import * as classes from './all-user.styles';

export const AllUsers: React.FC = () => {

    const { state } = React.useContext<MyState>(GlobalContext);
    const {users} = state;

    const [counter, setcounter] = React.useState<number>(5);

  return (
    <div className={classes.container}>
      <h2>Users List</h2>
      <button className={classes.btnPlus10} onClick={() => setcounter(counter + 10)}>+ 10</button>
      <div>
        {!users || users.length == 0 ? (
          <h3>there are no users..</h3>
        ) : (
          users &&
          users
            ?.slice(0, counter)
            .map((user: UsersAllData) => (
              <CardAllUsers user={user} key={user.id} />
            ))
        )}
      </div>
      <button className={classes.btnPlus10}  onClick={() => setcounter(counter + 10)}>+ 10</button>
    </div>
  );
}
