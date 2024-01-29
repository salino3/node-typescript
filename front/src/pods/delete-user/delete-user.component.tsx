import { Header } from '@/common-app';
import React from 'react';
import { DeleteProfile } from './components';
import * as classes from './delete-user.styles';

export const DeleteUser: React.FC = () => {

  return (
      <classes.Div>
          <Header />
          <DeleteProfile />
      </classes.Div>
  )
}
