import styled from "styled-components";
import { boxShadow } from "assets/styles/utilities";

export const DropDownList = styled.ul`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.elements.bg};

  margin-top: 0.4rem;
  ${({ theme }) => boxShadow.default(theme)};
  list-style: none;
  padding: 2rem 2.4rem;
`;

export const DropDownListItem = styled.li`
  cursor: pointer;
  text-transform: capitalize;

  &:not(:last-child) {
    margin-bottom: 0.8rem;
  }

  &:hover {
    font-weight: 600;
  }
`;
