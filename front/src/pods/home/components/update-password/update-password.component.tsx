import React from "react";
import { useParams } from "react-router-dom";
import { GlobalContext, MyState, Users, UsersFunctions } from "@/core";
import { Button, FormField } from "@/common";
import * as classes from "./update-password.styles";



export const UpdatePassword: React.FC = () => {

const { getUserData, state } = React.useContext<MyState>(GlobalContext);
const {user} = state;

const { updateUser } = UsersFunctions();

const {id} = useParams();


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
    if(id) {
     getUserData(id);
    };
  }, [id]);

  React.useEffect(() => {
    if (user) {
      setNewPassword(user);
    };
  }, [user]);

 

  return (
    <div className={classes.container}>
      <h2>Update your Password</h2>
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
