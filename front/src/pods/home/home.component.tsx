import React, { useContext } from 'react';
import { GlobalContext, MyState } from '@/core';
import * as classes from './home.styles';

export const HomeComponent: React.FC = () => {

  const {state} = useContext<MyState>(GlobalContext);

  console.log("State: ", state)

  return (
    <classes.Div>
      home.component
    </classes.Div>
  )
}
