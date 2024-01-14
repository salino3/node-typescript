import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { theme } from "@/themes";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  height: 100%;
  width: 100%;
  text-align: center;

  details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: auto;
  }

  h1,
  summary {
    white-space: nowrap;
    background-color: ${theme.background.secondary};
    padding: 5px;
    width: fit-content;

    span {
    }
  }
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