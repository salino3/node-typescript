import { theme } from '@/themes';
import {css} from '@emotion/css';

export const divRows = css`
    margin: 0.5em;
    padding-left: 1em;
    color: white;
    border: solid 1px teal;
    border-radius: 15px;
    padding: 0.5em;
    background: rgba(255, 255, 255, 0.8);
    cursor: pointer;
    font-weight: 600;

    & b {
      color: ${theme.textColor.primary}
  }
`;