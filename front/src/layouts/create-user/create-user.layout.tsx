import React from 'react';
import { CreateUserScene } from '@/scenes/create-user';
import * as classes from './create-user.styles';

export const CreateUserLayout: React.FC = () => {

  return (
    <classes.Main>
      <CreateUserScene />
    </classes.Main>
  )
}
