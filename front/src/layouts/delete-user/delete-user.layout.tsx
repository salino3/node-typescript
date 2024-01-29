import React from 'react';
import { DeleteUserScene } from '@/scenes';
import * as classes from './delete-user.styles';

export const DeleteUserLayout: React.FC = () => {

  return (
    <classes.Main>
      <DeleteUserScene />
    </classes.Main>

  )
}
