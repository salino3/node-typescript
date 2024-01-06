import React from 'react';
import * as classes from './delete-profile-by-admin.styles';
import { Button, FormField } from '@/common';


export const DeleteProfileByAdmin: React.FC = () => {

     const [user, setUser] = React.useState<{email: string; password: string;}>({
       email: "",
       password: "",
     });

     const handleChange =
       (key: keyof { email: string; password: string }) => (event: any) => {
         const { value } = event.target;
         setUser({ ...user, [key]: value });
       };

  return (
    <div className={classes.container}>
      <h2>Delete Form</h2>
      <form action="/users/admin/:id/:idAdmin">
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
