import React from 'react';
import * as classes from './home.styles';
import { HomeComponent } from '@/pods';

export const HomeScene: React.FC = () => {
  return (
    <classes.Div>
        <HomeComponent />
    </classes.Div>
  )
}
