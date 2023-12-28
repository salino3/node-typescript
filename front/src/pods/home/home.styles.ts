import styled from "@emotion/styled";
import { css } from "@emotion/css";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  height: 100%;
  width: 100%;
  padding-top: 12px;

`;

export const detailsHome = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  font-size: 22px;
  cursor: pointer;

  h2 {
    color: black;
  }
`;