import { theme } from '@/themes';
import {css} from '@emotion/css';

export const container = css`

 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 padding-top: 15px;

`;

export const titleList = css`

 background: ${theme.background.secondary};
 padding: 8px;
 font-weight: 550;
 border-radius: 5px;

`;

export const btnPlus10 = css`

  cursor: pointer;
  padding: 5px;
  border-radius: 12px;

  button {
    width: 60px;
  }

` ;




