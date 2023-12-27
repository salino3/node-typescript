import React from 'react';
import { MyState } from '.';

export const GlobalContext = React.createContext<MyState>({} as MyState);