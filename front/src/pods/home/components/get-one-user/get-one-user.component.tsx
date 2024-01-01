import React from "react";
import Axios from "axios";
import { Users } from "@/core";
import { Button, FormField } from "@/common";
import * as classes from './get-one-user.styles';


export const GetOneUser: React.FC = () => {

  const [getUser, setGetUser] = React.useState("");
  const [userData, setUserData] = React.useState<Users>({
    name: "",
    email: "",
    age: null,
    gender: "",
    job: "",
    surname: "",
    id: ""
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined = (event:  React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const storedUserId = localStorage.getItem("my-identification-userId");

    const token = document.cookie.replace(
    new RegExp(`(?:(?:^|.*;\\s*)my-token-${storedUserId}\\s*=\\s*([^;]*).*$)|^.*$`),
    "$1"
    );

    Axios.get(`${import.meta.env.VITE_APP_BASE_URL}/users/${getUser}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setUserData(response.data[0]);
        console.log(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
    
  };

  return (
    <div className={classes.container}>
      <h2>Get One User</h2>

      <form onSubmit={handleSubmit}>
        <FormField
          name="id"
          required
          type="text"
          br
          pl="Insert a ID of a user.."
          handleChange={(event) => setGetUser(event?.target.value)}
        />
        <Button text="Send" type="submit" />
      </form>
      <div>
        <h3>
          {" "}
          Name: <span>{userData && userData?.name}</span>
        </h3>
        <h3>
          {" "}
          Email: <span>{userData && userData?.email}</span>
        </h3>
        {/* <h3>Name: <span>{JSON.stringify(userData)}</span></h3> */}
      </div>
    </div>
  );
};
