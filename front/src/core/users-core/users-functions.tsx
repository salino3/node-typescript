import React from 'react';
import Axios from 'axios';
import { Users } from '../interface';

interface Props {
  getUser: string;
  setUserData: (value: React.SetStateAction<Users>) => void;
};

export const UsersFunctions = ({getUser, setUserData}: Props) => {


const updateUser = () => {

    const storedUserId = localStorage.getItem("my-identification-userId");

    const token = document.cookie.replace(
      new RegExp(
        `(?:(?:^|.*;\\s*)my-token-${storedUserId}\\s*=\\s*([^;]*).*$)|^.*$`
      ),
      "$1"
    );

    Axios.get(`${import.meta.env.VITE_APP_BASE_URL}/users/${getUser}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setUserData(response.data[0]);
        console.log(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
};

    
  return {
    updateUser,
  };
}
