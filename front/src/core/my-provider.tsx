import React from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import jwtDecode from "jwt-decode";
import { DecodedToken, GlobalContext, MyReducer, UsersFunctions, initialState } from '.';
import { SwitchRoutes } from '@/routes';

interface Props {
  children: JSX.Element | JSX.Element[];
};

export const MyProvider: React.FC<Props> = ({children}) => {

    const [state, dispatch] = React.useReducer(MyReducer, initialState);
    const { getToken } = UsersFunctions();

    const navigate = useNavigate();


  const getUsers = React.useCallback(() => {

     Axios.get(`${import.meta.env.VITE_APP_BASE_URL}/users`)
     .then((res) => {

       dispatch({
         type: "GET_USERS",
         payload: res.data,
       });
     })

  }, []);

//
  const getUserData = React.useCallback((userID: string) => {

    const token = getToken();

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
        navigate(SwitchRoutes.dashboard);
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
      getUsers();
     }, []);

     // User Data
    const [currentlyUserData, setCurrentlyUserData] = React.useState<DecodedToken | undefined>() || {};
    
    ///* authToken
    let authToken = getToken();
    React.useEffect(() => {
    
    if (authToken) {
    const decodedToken: any = jwtDecode(authToken);
    setCurrentlyUserData(decodedToken);

    };
  }, [authToken]);


  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
        getUsers,
        getUserData,
        toggleTheme,
        capitalizing,
        // 
        currentlyUserData,
        setCurrentlyUserData,
      }}
    >
      <div id={state.theme}>{children}</div>
    </GlobalContext.Provider>
  );
}
