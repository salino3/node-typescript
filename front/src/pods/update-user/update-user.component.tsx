import React from 'react';
import { Link, useParams } from "react-router-dom";
import { GlobalContext, MyState, Users } from '@/core';
import { Header } from '@/common-app';
import { UpdatePassword, UpdateUserData } from './components';
import * as classes from './update-user.styles';

export const UpdateUser: React.FC = () => {

    const { getUserData, state } = React.useContext<MyState>(GlobalContext);
    const { user } = state;

    const { id } = useParams();

    const [newUser, setNewUser] = React.useState<Users>(user);
    const [changeDataOrPsw, setChangeDataOrPsw] = React.useState<boolean>(true);


  React.useEffect(() => {
     if (id) {
      getUserData(id);
     }
  }, [id]);
     
  React.useEffect(() => {
    if (user) {
      setNewUser(user);
    }
  }, [user]);

  return (
    <classes.Div>
      <Header />
      <h2>{changeDataOrPsw ? "Update your Profile" : "Update your Password"}</h2>
      <h4 className={classes.titleH4} onClick={() => setChangeDataOrPsw(!changeDataOrPsw)}>
        <Link to={""}>
          {changeDataOrPsw ? "Update Password" : "Update user data"}
        </Link>
      </h4>
      {changeDataOrPsw ? (
        <UpdateUserData newUser={newUser} setNewUser={setNewUser} />
      ) : (
        <UpdatePassword newUser={newUser} setNewUser={setNewUser} />
      )}
    </classes.Div>
  );
}
