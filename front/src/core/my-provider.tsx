import React from 'react';
import { GlobalContext, MyReducer, initialState } from '.';

interface Props {
  children: JSX.Element | JSX.Element[];
};

export const MyProvider: React.FC<Props> = ({children}) => {

    const [state, dispatch] = React.useReducer(MyReducer, initialState)


 const toggleTheme = () => {
   dispatch({
     type: "UPDATE_THEME",
     payload: state.theme === "light" ? "dark" : "light",
   });
 };

  return (
    <GlobalContext.Provider value={{state, dispatch, toggleTheme }}>
      <div id={state.theme}>{children}</div>
    </GlobalContext.Provider>
  );
}
