import React from 'react';
import { UpdateUserScene } from '@/scenes';
import * as classes from './update-user.styles';


export const UpdateUserLayout: React.FC = () => {

  return (
    <classes.Main>
        <UpdateUserScene />
    </classes.Main>        
        
  )
}
