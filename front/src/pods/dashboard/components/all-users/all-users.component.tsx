import React from 'react';
import { GlobalContext, MyState, UsersAllData } from '@/core';
import { CardAllUsers } from '@/common-app';
import { Button, SearchUserList } from '@/common';
import * as classes from './all-user.styles';

export const AllUsers: React.FC = () => {

    const { state } = React.useContext<MyState>(GlobalContext);
    const {users} = state;

    const [counter, setcounter] = React.useState<number>(5);

  return (
    <div className={classes.container}>
      <SearchUserList />
      <br />
      <h2 className={classes.titleList}>Users List</h2>
      <br />
      <Button
        click={() => setcounter(counter + 10)}
        disabled
        text="+ 10"
        myStyle={classes.btnPlus10}
      />
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
      <Button
        click={() => setcounter(counter + 10)}
        disabled
        text="+ 10"
        myStyle={classes.btnPlus10}
      />
    </div>
  );
}
