import React from "react";
import { Users, UsersFunctions } from "@/core";
import { Button, FormField } from "@/common";
import { GenderFormField } from "@/common-app";
import * as classes from "./update-user.styles";

interface Props {
  newUser: Users;
  setNewUser: React.Dispatch<React.SetStateAction<Users>>;
};

interface Genders {
  value: string;
};

export const UpdateUserData: React.FC<Props> = (props) => {
  const { newUser, setNewUser } = props;

const { updateUser } = UsersFunctions();


  const genders: Genders[] = [
    { value: ".." },
    { value: "female" },
    { value: "male" },
    { value: "other" },
    { value: "prefer not to say" },
  ];


  const handleChange = (key: keyof Users) => (event: any) => {
    const { value } = event.target;
    setNewUser({ ...newUser, [key]: value });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined = (
    event: React.FormEvent<HTMLFormElement>
   ) => {
     event.preventDefault();

     console.log("Update->", newUser)
     updateUser(newUser);
  };


  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <FormField
          required
          nameValue={newUser?.name}
          handleChange={handleChange("name")}
          name="name"
          type="text"
        />
        <FormField
          required
          nameValue={newUser?.surname}
          handleChange={handleChange("surname")}
          name="surname"
          type="text"
        />
        <FormField
          required
          nameValue={newUser?.email.toLowerCase()}
          handleChange={handleChange("email")}
          name="email"
          type="email"
        />
        <FormField
          required
          nameValue={newUser?.age ? newUser?.age : ""}
          handleChange={handleChange("age")}
          name="age"
          type="number"
        />
        <FormField
          required
          nameValue={newUser?.job}
          handleChange={handleChange("job")}
          name="job"
          type="text"
        />
        <GenderFormField
          name="gender"
          nameValue={newUser?.gender}
          handleChange={handleChange("gender")}
          required
          genders={genders}
        />
        <Button text="Submit" type="submit" myStyle={classes.btnForm} />
      </form>
    </div>
  );
};
