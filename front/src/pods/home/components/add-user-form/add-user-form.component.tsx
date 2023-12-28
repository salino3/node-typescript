import React from 'react';
import Axios from 'axios';
import { Users } from '@/core';
import { Button, FormField } from '@/common';
import { GenderFormField } from '@/common-app';
import * as classes from './add-user-form.styles';

interface Genders {
    value: string
};


export const AddUserForm: React.FC = () => {
    
    const genders: Genders[] = [
      { value: ".." },
      { value: "female" },
      { value: "male" },
      { value: "other" },
      { value: "prefer not to say" },
    ];

    const [newUser, setNewUser] = React.useState<Users>({
        name: '',
        surname: '',
        email: '',
        password: '',
        age: null,
        job: '',
        gender: ''
    });

    const handleChange =
      (key: keyof Users) =>
       (event: any ) => {
        const { value } = event.target;
        setNewUser({ ...newUser, [key]: value });
      };

    const handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined = async (
      event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();

          
          await Axios.post(
            `${import.meta.env.VITE_APP_BASE_URL}/users`,
            newUser
          )
          .then((res) => {
              console.log(res);
            })
            .catch((error) => {
              console.log(error);
            });
      };


      React.useEffect(() => {
        console.log(newUser);    
      }, [newUser]);

  return (
    <div className={classes.container}>
      <h2>Create your Profile</h2>
      <form onSubmit={handleSubmit} className={classes.form}>
        <FormField
          required={false}
          nameValue={newUser?.name}
          handleChange={handleChange("name")}
          name="name"
          type="text"
        />
        <FormField
          required={false}
          nameValue={newUser?.surname}
          handleChange={handleChange("surname")}
          name="surname"
          type="text"
        />
        <FormField
          required={false}
          nameValue={newUser?.email}
          handleChange={handleChange("email")}
          name="email"
          type="email"
        />
        <FormField
          required={false}
          nameValue={newUser?.password}
          handleChange={handleChange("password")}
          name="password"
          type="password"
        />
        <FormField
          required={false}
          nameValue={newUser?.age ? newUser?.age : ""}
          handleChange={handleChange("age")}
          name="age"
          type="number"
        />
        <FormField
          required={false}
          nameValue={newUser?.job}
          handleChange={handleChange("job")}
          name="job"
          type="text"
        />
        <GenderFormField
          name="gender"
          nameValue={newUser?.gender}
          handleChange={handleChange("gender")}
          required={false}
          genders={genders}
        />
        <Button text="Submit" type="submit" myStyle={classes.btnForm} />
      </form>
    </div>
  );
}
