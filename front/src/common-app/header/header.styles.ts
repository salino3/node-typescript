import {css} from '@emotion/css';
import { theme } from '@/themes';


export const header = css`
  background-color: ${theme.background.tertiary};
  width: 100%;
  top: 0;
  position: fixed;
  
  `;

export const container = css`
  border: solid ${theme.background.secondary};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 70px;
`;

export const contentLeft = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const titleHeader = css`
  color: ${theme.textColor.secondary};
  font-weight: 700;
  font-size: 20px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

export const contentRight = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const navbar = css`
  font-family: cursive;

  ul {
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;
    justify-content: center;
    border-bottom: solid ${theme.background.primary};
    padding: 0px 10px 3px;
    list-style-type: none;

  }
`;

export const liAnchor = css`
 
    background-color: ${theme.background.secondary};
    padding: 5px;
    border-radius: 8px;
    cursor: pointer;

    a {
      text-decoration: none;
      color: ${theme.textColor.primary};
    }
 

  &:hover {
    background-color: ${theme.opacifying(theme.background.primary, 0.6)};
    color: ${theme.opacifying(theme.textColor.primary, 1)};
  }

  &:active {
    background-color: ${theme.background.primary};
  }
`;

export const liBtn = css`

`;