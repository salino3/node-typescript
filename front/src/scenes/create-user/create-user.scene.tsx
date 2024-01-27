import React from 'react';
import { CreateUser } from '@/pods';
import * as classes from './create-user.styles';


export const CreateUserScene: React.FC = () => {
  return (
    <classes.Div>
        <CreateUser />
    </classes.Div>
  )
}
