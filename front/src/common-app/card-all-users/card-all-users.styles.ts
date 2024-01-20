import {css} from '@emotion/css';

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 10px;
  border: solid;
  cursor: pointer;
`;

export const boxCardText = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 400px;
  width: auto;
  justify-content: center;
`;

export const cardText = css`

 display: flex;
 flex-direction: row;
 align-items: center;
 width: 100%;
 justify-content: center;
 gap: 10px;

`;

export const spanType = css`
  color: black;
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;


export const spanValue = css`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;


