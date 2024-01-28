import React from "react";
import { Users, UsersAllData, UsersFunctions } from "@/core";
import { Button, FormField } from "@/common";
import * as classes from "./update-password.styles";

interface Props {
  user: UsersAllData;
};

export const UpdatePassword: React.FC<Props> = (props) => {
  const {user} = props;


const { updateUser } = UsersFunctions();



    const [newPassword, setNewPassword] = React.useState<Users>(user);
    const [confirmNewPassword, setConfirmNewPassword] = React.useState<string>("");



  const handleChange = (key: keyof Users) => (event: any) => {
    const { value } = event.target;
    setNewPassword({ ...newPassword, [key]: value });
  };

  const handleChangeConfirmedPsw = (event: any) => {
      setConfirmNewPassword(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined = (
    event: React.FormEvent<HTMLFormElement>
   ) => {
     event.preventDefault();

     console.log("Update->", newPassword)
     if(newPassword?.password === confirmNewPassword){
      updateUser(newPassword);
    } else {
      alert("The passwords do not match");
    };
  };

  React.useEffect(() => {
    if (user) {
      setNewPassword(user);
    };
  }, [user]);

 

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <FormField
          required
          nameValue={newPassword.password}
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
