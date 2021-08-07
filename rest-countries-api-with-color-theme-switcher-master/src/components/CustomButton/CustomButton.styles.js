import { boxShadow, display, flex } from "assets/styles/utilities";
import styled from "styled-components";

export const CustomButton = styled.button`
  height: 4rem;
  width: 13.8rem;
  background: white;
  ${boxShadow.default};
  ${display.flex};
  ${flex.items.center};
  ${flex.justify.center};
  gap: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:focus {
    outline: none;
  }

  &:hover {
    transform: translateY(-5px);
  }
`;
