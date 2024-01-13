import Axios from 'axios';
import { Users } from '../interface';


const getToken = (): string | null => {
  const storedUserId = localStorage.getItem("my-identification-userId");
  return document.cookie.replace(
    new RegExp(
      `(?:(?:^|.*;\\s*)my-token-${storedUserId}\\s*=\\s*([^;]*).*$)|^.*$`
    ),
    "$1"
  );
};

export const UsersFunctions = () => {


const updateUser = (user: Users) => {

    const token = getToken();

    Axios.put(`${import.meta.env.VITE_APP_BASE_URL}/users/${user.id}`, user, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
};

const deleteUser = (user: {email: string; password: string;}) => {

    const token = getToken();

    const storedUserId = localStorage.getItem("my-identification-userId");

     Axios.delete(
       `${import.meta.env.VITE_APP_BASE_URL}/users/${storedUserId}`,
       {
         data: user,
         headers: {
           Authorization: `Bearer ${token}`,
           "Content-Type": "application/json",
         },
       }
     )
       .then((res) => {
         if (storedUserId) {
           document.cookie = `my-token-${storedUserId}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; secure; samesite=strict;`;
           localStorage.removeItem("my-identification-userId");
         } else {
           alert("Could not clear cookies, try manually");
         }
       })
       .catch((error) => {
         console.error("Error", error);
       });
};

    
  return {
    updateUser,
    deleteUser,
    getToken,
  };
}
