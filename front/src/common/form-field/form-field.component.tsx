import React from "react";
import { GlobalContext, MyState } from "@/core";
import * as classes from './form-field.styles';

interface Props {
  name: string;
  type: string;
  required: boolean;
  handleChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  handleClick?: React.MouseEventHandler<HTMLInputElement> | undefined;
  br?: boolean
};

export const FormField: React.FC<Props> = (props) => {
  const { name, type, required, handleChange, handleClick, br = true} = props;

  const { capitalizing } = React.useContext<MyState>(GlobalContext);

  return (
    <div className={classes.container}>
      <label htmlFor={name}>{capitalizing(name)}</label>
     {br && <br />}
      <input
        onChange={handleChange}
        onClick={handleClick}
        required={required}
        name={name}
        id={name}
        type={type}
      />
    </div>
  );
};
