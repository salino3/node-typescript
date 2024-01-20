import React from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { UsersFunctions } from "@/core";
import { Button, FormField } from "@/common";
import { SwitchRoutes } from "@/routes";
import * as classes from "./login-form.styles";

interface LoginData {
    email: string;
    password: string;
};

export const LoginForm: React.FC = () => {

  const navigate = useNavigate();
  const { loginUser } = UsersFunctions();

  const [userData, setUserData] = React.useState<LoginData>({
    email: "",
    password: "",
  });

  const handleChange = (key: keyof LoginData) => (event: any) => {
    const { value } = event.target;
    setUserData({ ...userData, [key]: value });
  };

  const handleSubmit:
        | React.FormEventHandler<HTMLFormElement>
        | undefined = async (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();

          try {
            await loginUser(userData, setUserData);
            navigate(`${SwitchRoutes.dashboard}`);
          } catch (error) {
            console.error("Error login user", error);
          };
        };

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Login Form</h2>
      <form onSubmit={handleSubmit} className={classes.form}>
        <FormField
          required={true}
          nameValue={userData?.email}
          pl="Insert your email.."
          handleChange={handleChange("email")}
          name="email"
          type="email"
        />
        <FormField
          required={true}
          nameValue={userData?.password}
          pl="Insert your password.."
          handleChange={handleChange("password")}
          name="password"
          type="password"
        />
        <Button text="Submit" type="submit" myStyle={classes.btnForm} />
      </form>
    </div>
  );
};
