import React from "react";
import { GlobalContext, MyState } from "@/core";
import * as classes from "./gender-fomr-field.styles";

interface Props {
  name: string;
  required: boolean;
  handleChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  handleClick?: React.MouseEventHandler<HTMLInputElement> | undefined;
  br?: boolean;
  genders: {value: string}[]
};




export const GenderFormField: React.FC<Props> = (props) => {
  const { name, genders, required, handleChange, handleClick, br = true } = props;

  const { capitalizing } = React.useContext<MyState>(GlobalContext);




  return (
    <div className={classes.container}>
      <label htmlFor={name}>{capitalizing(name)}</label>
      {br && <br />}
      <select required={required} name={name} id={name}>
        { genders && genders.map((gender: {value: string}, index: number) => (
            <option key={index} value={gender?.value == '..' ? '' : gender?.value}>{gender?.value}</option>
         ))
        }
      </select>
    </div>
  );
};
