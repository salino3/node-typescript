import React from "react";
import Axios from "axios";
import * as classes from "./logout-button.styles";


export const Logout: React.FC = () => {

  const handleLogout = async () => {
  
    const storedUserId = localStorage.getItem("my-identification-userId");

    Axios.post(`${import.meta.env.VITE_APP_BASE_URL}/logout`, {storedUserId})
    .then((res) => {
      
      
      if (storedUserId){
        document.cookie = `my-token-${storedUserId}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; secure; samesite=strict;`;
        localStorage.removeItem("my-identification-userId")
        console.log("Logout successful");
        }else {
          alert("Could not clear cookies, try manually");
        };
      })
      .catch((error) => {
        console.error("Logout error", error);
      });
  };

  return (
    <div className={classes.container}>
      <h2>Logout Form</h2>
      <button type="submit" onClick={() => handleLogout()}>Logout</button>
    </div>
  );
};
