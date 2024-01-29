import React from "react";
import { useNavigate } from "react-router-dom";
import { UsersFunctions } from "@/core";
import { Button } from "@/common/button";
import { SwitchRoutes } from "@/routes";
import * as classes from "./logout-button.styles";


export const Logout: React.FC = () => {

  const navigate = useNavigate();
  const {logoutUser} = UsersFunctions();


  const handleLogout = () => {

     logoutUser() 
      .then(() => {
       navigate(`${SwitchRoutes.root}`);
        })
        .catch((error) => {       
           console.error("Error login user", error);
        });
  };

  return (
    <div className={classes.container}>
      <Button
       disabled
       type="submit"
       click={() => handleLogout()}
       text="Logout"      
      />
    </div>
  );
};
