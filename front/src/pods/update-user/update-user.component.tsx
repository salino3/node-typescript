import React from 'react';
import { Link, useParams } from "react-router-dom";
import { GlobalContext, MyState, Users } from '@/core';
import { Header } from '@/common-app';
import { UpdatePassword, UpdateUserData } from './components';
import { SwitchRoutes } from '@/routes';
import * as classes from './update-user.styles';

export const UpdateUser: React.FC = () => {

    const { getUserData, state } = React.useContext<MyState>(GlobalContext);
    const { user } = state;

    const { id } = useParams();

    const [changePsw, setChangePsw] = React.useState<boolean>(true);


     React.useEffect(() => {
       if (id) {
         getUserData(id);
       }
     }, [id]);

  return (
    <classes.Div>
      <Header />
      <h2>{changePsw ? "Update your Profile" : "Update your Password"}</h2>
      <h4 className={classes.titleH4} onClick={() => setChangePsw(!changePsw)}>
        <Link to={""}>
          {changePsw ? "Update Password" : "Update user data"}
        </Link>
      </h4>
      {changePsw ? (
        <UpdateUserData user={user} />
      ) : (
        <UpdatePassword user={user} />
      )}
    </classes.Div>
  );
}
