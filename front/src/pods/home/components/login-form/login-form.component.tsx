import React from "react";
import Axios from "axios";
import { Button, FormField } from "@/common";
import * as classes from "./login-form.styles";

interface LoginData {
    email: string;
    password: string;
};

export const LoginForm: React.FC = () => {
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

        Axios.post(`${import.meta.env.VITE_APP_BASE_URL}/login`, userData)
          .then((response) => {
            const { token } = response.data;

            // Save the token in the client coockies
            document.cookie = `my-token=${token}; path=/; secure; samesite=strict; max-age=${
              2 * 60 * 60
            }; domain=${import.meta.env.VITE_APP_DOMAIN}`;

            console.log("Login successful", response.data);
          })
          .catch((error) => {
            console.error("Login error", error);
          })
          .finally(() => {
            setUserData({
              email: "",
              password: "",
            });
          });
      };

  return (
    <div className={classes.container}>
      <h2>Login Form</h2>
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
