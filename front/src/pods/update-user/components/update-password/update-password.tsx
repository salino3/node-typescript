import React from "react";
import { Users, UsersFunctions } from "@/core";
import { Button, FormField } from "@/common";
import * as classes from "./update-password.styles";

interface Props {
  newUser: Users;
  setNewUser: React.Dispatch<React.SetStateAction<Users>>;
};

export const UpdatePassword: React.FC<Props> = (props) => {
  const { newUser, setNewUser } = props;

   const { updateUser } = UsersFunctions();

   const [confirmNewPassword, setConfirmNewPassword] = React.useState<string>("");


  const handleChange = (key: keyof Users) => (event: any) => {
    const { value } = event.target;
    setNewUser({ ...newUser, [key]: value });
  };

  const handleChangeConfirmedPsw = (event: any) => {
      setConfirmNewPassword(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined = (
    event: React.FormEvent<HTMLFormElement>
   ) => {
     event.preventDefault();

     console.log("Update->", newUser)
     if(newUser?.password === confirmNewPassword){
      updateUser(newUser);
    } else {
      alert("The passwords do not match");
    };
  };


  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <FormField
          required
          nameValue={newUser.password}
          handleChange={handleChange("password")}
          name="New Password"
          type="password"
          pl="Text your new Password"
        />
        <FormField
          required
          nameValue={confirmNewPassword}
          handleChange={handleChangeConfirmedPsw}
          name="Confirm new Password"
          type="password"
          pl="Confirm your new Password"
        />
        <Button text="Submit" type="submit" myStyle={classes.btnForm} />
      </form>
    </div>
  );
};
