import React from "react";
import { GlobalContext, MyState, Users } from "@/core";
import { Button, FormField } from "@/common";
import * as classes from './get-one-user.styles';


export const GetOneUser: React.FC = () => {

  const { getUserData, state } = React.useContext<MyState>(GlobalContext);
  const {user} = state;

  const [userID, setUserID] = React.useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined = (event:  React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    getUserData(userID)
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
          handleChange={(event) => setUserID(event?.target.value)}
        />
        <Button text="Send" type="submit" />
      </form>
      <div>
        <h3>
          {" "}
          Name: <span>{user && user?.name}</span>
        </h3>
        <h3>
          {" "}
          Email: <span>{user && user?.email}</span>
        </h3>
        <h3>Name: <span>{JSON.stringify(user)}</span></h3>
      </div>
    </div>
  );
};
