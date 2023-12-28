import React from "react";
import { cx } from "@emotion/css";
import * as classes from "./button.styles";

interface Props {
  text: string;
  type?: "submit" | "button" | "reset" | undefined;
  myStyle?: string;
  divHeight?: number;
  btnHeight?: number;
  divWidth?: number;
  click?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export const Button: React.FC<Props> = (props) => {
  const {
    text,
    type,
    myStyle,
    btnHeight = 30,
    divHeight = 30,
    divWidth = 70,
    click,
  } = props;

  return (
    <div className={cx(classes.container(divHeight, divWidth), `${myStyle}`)}>
      <button
        type={type}
        onClick={click}
        className={classes.btn(btnHeight)}
      >
        {text}
      </button>
    </div>
  );
};
