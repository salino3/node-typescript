import React from 'react';
import Axios from 'axios';
import { Button, FormField } from '@/common';
import * as classes from './delete-profile.styles';


export const DeleteProfile: React.FC = () => {

    const [user, setUser] = React.useState<{email: string; password: string;}>({
        email: "",
        password: ""
    });

   const handleChange = (key: keyof {email: string; password: string;}) => (event: any) => {

    const {value} = event.target;
    setUser({...user, [key]: value});
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
        `${import.meta.env.VITE_APP_BASE_URL}/users/${storedUserId}`,
        {
          data: user,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          }
        }
      )
        .then((res) => {
          if (storedUserId) {
            document.cookie = `my-token-${storedUserId}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; secure; samesite=strict;`;
            localStorage.removeItem("my-identification-userId");
          } else {
            alert("Could not clear cookies, try manually");
          }
        })
        .catch((error) => {
          console.error("Error", error);
        });
   };

  return (
    <div className={classes.container}>
        <h2>Delete Form</h2>
      <form action="/users/:id" onSubmit={handleSubmit}>
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
        <Button
         text='Submit'
         type='submit'
          />
      </form>
    </div>
  );
}
