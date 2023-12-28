import React from 'react';
import { FormField } from '@/common';
import * as classes from './add-user-form.styles';

export const AddUserForm: React.FC = () => {

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
        <FormField required={false} name="gender" type="text" />
      </form>
    </div>
  );
}
