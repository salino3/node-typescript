import React from 'react';
import { GlobalContext, MyState, UsersFunctions } from '@/core';
import { Button, FormField } from '@/common';
import * as classes from './delete-profile-by-admin.styles';


export const DeleteProfileByAdmin: React.FC = () => {

     const { getUsers } = React.useContext<MyState>(GlobalContext);
     const { deleteUserByAdmin } = UsersFunctions();


     const [user, setUser] = React.useState<{id: string; email: string; password: string;}>({
      id: "",
       email: "",
       password: "",
     });

     const handleChange =
       (key: keyof {id: string; email: string; password: string }) => (event: any) => {
         const { value } = event.target;
         setUser({ ...user, [key]: value });
     };

     const handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined = async (
       event: React.FormEvent<HTMLFormElement>
     ) => {
       event.preventDefault();

       try {
         await deleteUserByAdmin(user);
         getUsers();
       } catch (error) {
         console.error("Error deleting user", error);
       };
     };

  return (
    <div className={classes.container}>
      <h2>Delete Form</h2>
      <form action="/users/admin/:id/:idAdmin" onSubmit={handleSubmit}>
        <FormField
          name="ID user"
          required
          type="text"
          handleChange={handleChange("id")}
          nameValue={user?.id}
          pl="Insert the user ID.."
        />{" "}
        <FormField
          name="email"
          required
          type="email"
          handleChange={handleChange("email")}
          nameValue={user?.email}
          pl="Insert your email.."
        />
        <FormField
          name="password"
          required
          type="password"
          handleChange={handleChange("password")}
          nameValue={user?.password}
          pl="Insert your password.."
        />
        <Button text="Submit" type="submit" />
      </form>
    </div>
  );
}
