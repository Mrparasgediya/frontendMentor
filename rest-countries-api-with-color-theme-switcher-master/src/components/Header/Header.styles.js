import styled from "styled-components";
import { boxShadow, container, display, flex } from "assets/styles/utilities";

export const Header = styled.header`
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.elements.bg};
  ${({ theme }) => boxShadow.default(theme)};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;

  @media (max-width: 768px) {
    height: 10rem;
  }
`;

export const Container = styled.div`
  ${container.lg};
  ${display.flex};
  ${flex.items.center};
  ${flex.justify.between};
`;

export const HeaderHeading = styled.h1`
  font-size: 1.8rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ChangeThemeContainer = styled.div`
  ${display.flex};
  ${flex.items.center};
  gap: 1rem;
  cursor: pointer;
`;

export const ChangeThemeText = styled.span`
  font-weight: 600;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;
