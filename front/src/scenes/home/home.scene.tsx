import React from 'react';
import { HomeComponent } from '@/pods';
import * as classes from './home.styles';

export const HomeScene: React.FC = () => {
  return (
    <classes.Div>
        <HomeComponent />
    </classes.Div>
  )
}
