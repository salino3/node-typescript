import React from 'react';
import { FormField } from '@/common';
import * as classes from './delete-profile.styles';


export const DeleteProfile: React.FC = () => {

  return (
    <div>
        
        <form action="/users/:id">
            {/* <FormField
             name='email'
             required
             type='email'
             nameValue={''}
             pl='Insert your email..'
              /> */}
        </form>
    </div>
  )
}
