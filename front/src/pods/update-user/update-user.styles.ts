import { theme } from "@/themes";
import styled from "@emotion/styled";
import { css } from "@emotion/css";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;


export const titleH4 = css`
  margin-top: 12px;
  background: ${theme.background.secondary};
  padding: 8px;
  border-radius: 5px;
`;


