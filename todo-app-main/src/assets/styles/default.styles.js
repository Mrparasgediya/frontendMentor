import { css } from "styled-components";

export const defaultButtonStyles = css`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: inherit;
  font-family: inherit;
  font-size: inherit;

  &:focus {
    outline: none;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text.default}};
  }
 
`;

export const todoDefaultStyles = css`
  min-height: 6.4rem;
  padding: 0 2.4rem;
  display: flex;
  align-items: center;
  gap: 2.4rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

export const todosContainerStyles = css`
  position: relative;
  width: 100%;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.bg.todo};
  box-shadow: 0px 0px 20px 0px hsl(0deg 0% 0% / 14%);
`;
