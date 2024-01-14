import { theme } from '@/themes';
import {css} from '@emotion/css';


export const container = css`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid ${theme.opacifying(theme.background.secondary, 0.5)};
  padding: 20px 50px 50px;
  gap: 30px;
`;

export const title = css`
  background-color: ${theme.background.secondary};
  padding: 5px;
  font-weight: 600;
  font-family: Georgia, "Times New Roman", Times, serif;
  letter-spacing: 1px;
`;

export const form = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;


export const btnForm = css`
  margin-top: 15px;
  width: 100%;

  button {
    color: darkgreen;
  }
`;


