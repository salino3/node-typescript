import React from 'react';
import Axios from 'axios';
import { GlobalContext, MyReducer, Users, UsersAllData, UsersFunctions, initialState } from '.';

interface Props {
  children: JSX.Element | JSX.Element[];
};

export const MyProvider: React.FC<Props> = ({children}) => {

    const [state, dispatch] = React.useReducer(MyReducer, initialState);


  const getUsers = React.useCallback((users: UsersAllData[]) => {
    dispatch({
      type: "GET_USERS",
      payload: users,
    });
  }, []);

//
  const getUserData = React.useCallback((userID: string) => {
    const storedUserId = localStorage.getItem("my-identification-userId");

    const token = document.cookie.replace(
      new RegExp(
        `(?:(?:^|.*;\\s*)my-token-${storedUserId}\\s*=\\s*([^;]*).*$)|^.*$`
      ),
      "$1"
    );

    Axios.get(`${import.meta.env.VITE_APP_BASE_URL}/users/${userID}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        dispatch({
          type: "GET_USER",
          payload: response.data[0],
        });
        console.log("Data", response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


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

     React.useEffect(() => {
      Axios.get(`${import.meta.env.VITE_APP_BASE_URL}/users`)
      .then((res) => {
        getUsers(res.data)
      });
     }, []);



  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
        getUsers,
        getUserData,
        toggleTheme,
        capitalizing,
      }}
    >
      <div id={state.theme}>{children}</div>
    </GlobalContext.Provider>
  );
}
