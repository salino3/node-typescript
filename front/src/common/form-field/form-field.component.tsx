import React from "react";
import { GlobalContext, MyState } from "@/core";
import * as classes from './form-field.styles';

interface Props {
  name: string;
  type: string;
  required: boolean;
  nameValue?: string | number | readonly string[] | undefined;
  pl?: string | undefined;
  txtName? : string;
  handleChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  handleClick?: React.MouseEventHandler<HTMLInputElement> | undefined;
  br?: boolean;
};

export const FormField: React.FC<Props> = (props) => {
  const { name, type, required, nameValue, txtName, pl, handleChange, handleClick, br = true} = props;

  const { capitalizing } = React.useContext<MyState>(GlobalContext);

  return (
    <div className={classes.container}>
      <label htmlFor={name}>
        {capitalizing(txtName ? txtName : name)}
      </label>
      {br && <br />}
      <input
        onChange={handleChange}
        onClick={handleClick}
        value={nameValue}
        required={required}
        placeholder={pl}
        name={name}
        id={name}
        type={type}
      />
    </div>
  );
};
