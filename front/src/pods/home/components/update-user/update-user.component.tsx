import React from "react";
import { useParams } from "react-router-dom";
import { GlobalContext, MyState, Users } from "@/core";
import { Button, FormField } from "@/common";
import { GenderFormField } from "@/common-app";
import * as classes from "./update-user.styles";

interface Genders {
  value: string;
};

export const UpdateUser: React.FC = () => {

const { getUserData, state } = React.useContext<MyState>(GlobalContext);
const {user} = state;

const {id} = useParams();

console.log("ID-> ", user)


  const genders: Genders[] = [
    { value: ".." },
    { value: "female" },
    { value: "male" },
    { value: "other" },
    { value: "prefer not to say" },
  ];

  const [newUser, setNewUser] = React.useState<Users>({
    name: "",
    surname: "",
    email: "",
    password: "",
    age: null,
    job: "",
    gender: "",
  });

  const handleChange = (key: keyof Users) => (event: any) => {
    const { value } = event.target;
    setNewUser({ ...newUser, [key]: value });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined = (
    event: React.FormEvent<HTMLFormElement>
   ) => {
     event.preventDefault();
  };

  React.useEffect(() => {
    if(id) {
     getUserData(id);
    };
  }, [id])
  

  return (
    <div className={classes.container}>
      <h2>Update your Profile</h2>
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
          nameValue={newUser?.password}
          handleChange={handleChange("password")}
          name="password"
          type="password"
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
