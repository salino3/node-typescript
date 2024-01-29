import React from 'react';
import { DeleteUser } from '@/pods';
import * as classes from "./delete-user.styles";


export const DeleteUserScene: React.FC = () => {

  return (
    <classes.Div>
        <DeleteUser />
    </classes.Div>
  );
}
