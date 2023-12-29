import React from 'react';
import { UsersAllData } from '@/core';
import * as classes from './card-all-users.styles';

interface Props {
  user: UsersAllData;
};

export const CardAllUsers: React.FC<Props> = (props) => {
    const {user} = props;


  return (
    <div className={classes.container}>
      {user?.name} <br />
      {user?.surname} <br />
      {user?.email} <br />
      {user?.age} <br />
      {user?.isAdult ? "It`s adult" : "It isn`t adult"} <br />
      {user?.gender} <br />
      {user?.job} 
    </div>
  );
}
