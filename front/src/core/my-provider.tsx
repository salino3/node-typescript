import React from 'react';
import { GlobalContext, MyReducer, initialState } from '.';

interface Props {
  children: JSX.Element | JSX.Element[];
};

export const MyProvider: React.FC<Props> = ({children}) => {

    const [state, dispatch] = React.useReducer(MyReducer, initialState)


 const toggleTheme = React.useCallback(() => {
   dispatch({
     type: "UPDATE_THEME",
     payload: state.theme === "light" ? "dark" : "light",
   });
 },
   [dispatch]);


 const capitalizing = React.useCallback((str: string) => 
     str.charAt(0).toUpperCase() + str.slice(1),
   [dispatch]
 );



  return (
    <GlobalContext.Provider
      value={{ state, dispatch, toggleTheme, capitalizing }}
    >
      <div id={state.theme}>{children}</div>
    </GlobalContext.Provider>
  );
}
