import React from "react";
import { GlobalContext, MyState } from "@/core";
import * as classes from "./gender-fomr-field.styles";

interface Props {
  name: string;
  required: boolean;
  handleChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  handleClick?: React.MouseEventHandler<HTMLOptionElement> | undefined;
  br?: boolean;
  genders: { value: string }[];
  nameValue?: string | number | readonly string[] | undefined;
};



export const GenderFormField: React.FC<Props> = (props) => {
  const { name, genders, required, handleChange, handleClick, br = true, nameValue } = props;

  const { capitalizing } = React.useContext<MyState>(GlobalContext);


  return (
    <div className={classes.container}>
      <label htmlFor={name}>{capitalizing(name)}</label>
      {br && <br />}
      <select onChange={handleChange} value={nameValue} required={required} name={name} id={name}>
        { genders && genders.map((gender: {value: string}, index: number) => (
            <option onClick={handleClick} key={index} value={gender?.value == '..' ? '' : gender?.value}>{gender?.value}</option>
         ))
        }
      </select>
    </div>
  );
};
