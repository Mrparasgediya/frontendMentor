import styled from "styled-components";
import {
  todoDefaultStyles,
  todosContainerStyles,
} from "assets/styles/default.styles";

export const AddTodoForm = styled.form`
  ${todosContainerStyles}
  ${todoDefaultStyles}
`;

export const Input = styled.input`
  font-size: inherit;
  border: none;
  width: 100%;
  font-family: inherit;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text.default};

  &:focus {
    outline: none;
  }

  &::placeholder {
    padding-left: 0.25rem;
    color: ${({ theme }) => theme.colors.text.light};
  }
`;
