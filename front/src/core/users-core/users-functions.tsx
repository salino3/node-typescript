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

    
  return {
    updateUser,
    getToken
  };
}
