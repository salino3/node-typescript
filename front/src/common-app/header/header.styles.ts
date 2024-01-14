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

export const navbar = css`
  ul {
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;
    justify-content: center;
    border-bottom: solid ${theme.background.primary};
    padding: 0px 10px 3px;
    list-style-type: none;

    li {
      background-color: ${theme.background.secondary};
      padding: 5px;
      border-radius: 8px;

      a {
        text-decoration: none;
        color: ${theme.textColor.primary};
      }
    }
  }
`;

