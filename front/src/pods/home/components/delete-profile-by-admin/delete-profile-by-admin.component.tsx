import React from 'react';
import Axios from 'axios';
import { Button, FormField } from '@/common';
import * as classes from './delete-profile-by-admin.styles';


export const DeleteProfileByAdmin: React.FC = () => {

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

     const handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined = (
       event: React.FormEvent<HTMLFormElement>
     ) => {
       event.preventDefault();

      const storedUserId = localStorage.getItem("my-identification-userId");

     const token = document.cookie.replace(
        new RegExp(`(?:(?:^|.*;\\s*)my-token-${storedUserId}\\s*=\\s*([^;]*).*$)|^.*$`),
        "$1"
     );


      Axios.delete(
        `${import.meta.env.VITE_APP_BASE_URL}/users/admin/${user.id}/${storedUserId}`,
        {
          data: user,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          }
        }
      )
      .then((res) => {
         console.log(res);
        })
        .catch((error) => {
          console.error("Error", error);
        });
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
