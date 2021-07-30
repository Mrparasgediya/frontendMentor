import styled from "styled-components";
import {
  todoDefaultStyles,
  todosContainerStyles,
} from "assets/styles/default.styles";

export const SeperateContainer = styled.div`
  ${todosContainerStyles}
  ${todoDefaultStyles}
  position:absolute;
  bottom: -8rem;
  left: 0;
`;
