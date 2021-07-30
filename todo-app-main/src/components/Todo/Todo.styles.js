import {
  defaultButtonStyles,
  todoDefaultStyles,
} from "assets/styles/default.styles";
import { ReactComponent as IconClose } from "assets/images/icon-cross.svg";
import styled, { css } from "styled-components";

const draggingTodoStyles = css`
  opacity: 0.4;
  border: 2px solid gray;
`;

const draggingOverTodoStyles = css`
  opacity: 0.4;
  border: 2px dashed gray;
`;
export const Todo = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
  ${todoDefaultStyles}
  opacity: 1;
  ${({ isDragging }) => isDragging && draggingTodoStyles}
  ${({ isDraggingOver }) => isDraggingOver && draggingOverTodoStyles}
`;

const completedTodoTextStyles = css`
  text-decoration: line-through;
  color: ${({ theme }) => theme.colors.text.veryLight};
`;

const defaultTodoTextStyles = css`
  color: ${({ theme }) => theme.colors.text.default};
`;

export const TodoText = styled.span`
  cursor: pointer;
  flex: 1;
  ${(props) =>
    props.isCompleted ? completedTodoTextStyles : defaultTodoTextStyles};
`;

export const CloseIconButton = styled.button`
  ${defaultButtonStyles}
`;

export const CloseIcon = styled(IconClose)`
  @media (max-width: 768px) {
    transform: scale(0.75);
  }
`;
