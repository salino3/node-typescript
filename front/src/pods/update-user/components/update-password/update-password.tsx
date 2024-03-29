import React from "react";
import { Users, UsersFunctions } from "@/core";
import { Button, FormField } from "@/common";
import * as classes from "./update-password.styles";

interface Props {
  newUser: Users;
  handleChange: (key: keyof Users) => (event: any) => void;
};

export const UpdatePassword: React.FC<Props> = (props) => {
  const { newUser, handleChange } = props;

  const { updateUserPassword } = UsersFunctions();

  const [confirmNewPassword, setConfirmNewPassword] = React.useState<string>("");

  const handleChangeConfirmedPsw = (event: any) => {
      setConfirmNewPassword(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined = (
    event: React.FormEvent<HTMLFormElement>
   ) => {
     event.preventDefault();

     console.log("Update->", newUser)
     if(newUser?.password === confirmNewPassword){
      updateUserPassword(newUser);
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
        <Button
          disabled={!!newUser.password && !!confirmNewPassword}
          text="Submit"
          type="submit"
          myStyle={classes.btnForm}
        />
      </form>
    </div>
  );
};
