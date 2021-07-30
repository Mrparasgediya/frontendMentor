import styled from "styled-components";
import {
  defaultButtonStyles,
  todoDefaultStyles,
} from "assets/styles/default.styles";

export const BottomFilterPanel = styled.li`
  ${todoDefaultStyles}
  display:flex;
  gap: 0;
  justify-content: space-between;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.text.light};
`;

export const BottomFilterPanelText = styled.span``;

export const BottomFilterPanelButton = styled.button`
  ${defaultButtonStyles}
`;
