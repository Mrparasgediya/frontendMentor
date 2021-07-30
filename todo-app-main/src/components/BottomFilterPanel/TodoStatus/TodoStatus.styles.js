import colors from "assets/styles/colors";
import styled, { css } from "styled-components";
import { defaultButtonStyles } from "assets/styles/default.styles";

const activeTodoStatusStyles = css`
  color: ${colors.blue.primary};
  font-weight: 700;

  &:hover {
    color: ${colors.blue.primary};
  }
`;

export const TodoStatus = styled.button`
  cursor: pointer;
  text-transform: capitalize;
  ${defaultButtonStyles}
  ${(props) => props.isActive && activeTodoStatusStyles}
`;
