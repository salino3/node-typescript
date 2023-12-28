import React from 'react';

interface Props {
    name: string;
};

export const FormField: React.FC<Props> = (props) => {
    const {name} = props;

  return (
    <div>
        <label htmlFor={name}>{name}</label>
    </div>
  )
}
