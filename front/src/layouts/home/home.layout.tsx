import React from 'react';
import { HomeScene } from '@/scenes';
import * as classes from './home.styles';

export const HomeLayout: React.FC = () => {
  return (
    <classes.Main>
      <HomeScene />
    </classes.Main>
  )
}
