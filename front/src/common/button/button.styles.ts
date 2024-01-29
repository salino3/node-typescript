import { theme } from "@/themes";
import { css } from "@emotion/css";

export const container = (divHeight: number, divWidth: number) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${divHeight}px;
  width: ${divWidth}px;
`;

export const btn = (btnHeight: number, disabled: boolean | undefined) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 1px;
  padding: 3px;
  color: ${theme.textColor.primary};
  font-weight: 600;
  border-radius: 5px;
  height: ${btnHeight}px;

  ${disabled
    && `
   cursor: pointer;
   &:active {
    font-size: 15px;
    opacity: 0.8;
    margin-top: 3%;
    height: calc(${btnHeight}px - 5%);
    padding: 2.5px;

    box-shadow: 7px 2px 44px 15px rgba(255, 218, 0, 0.75);
    -webkit-box-shadow: 7px 2px 44px 15px rgba(255, 218, 0, 0.75);
    -moz-box-shadow: 7px 2px 44px 15px rgba(255, 218, 0, 0.75);
  }`
   }
`;
