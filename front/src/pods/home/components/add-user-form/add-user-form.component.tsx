import React from 'react';
import { FormField } from '@/common';
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

  return (
    <div>
      <h2>Create your Profile</h2>
      <form>
        <FormField required={false} name="name" type="text" />
        <FormField required={false} name="surname" type="text" />
        <FormField required={false} name="email" type="email" />
        <FormField required={false} name="password" type="password" />
        <FormField required={false} name="age" type="number" />
        <FormField required={false} name="job" type="text" />
        <GenderFormField 
         name='gender'
         required={false}
         genders={genders}
          />
      </form>
    </div>
  );
}
