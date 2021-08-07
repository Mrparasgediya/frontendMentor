import { boxShadow, display, flex } from "assets/styles/utilities";
import styled, { css } from "styled-components";

const countryInfoContainerStyle = css`
  max-width: 100%;
  ${display.flex};
  ${flex.wrap.wrap};
  ${flex.items.center};
  gap: 1.4rem;
  @media (max-width: 768px) {
    ${flex.direction.col};
    ${flex.items.start};
    gap: 2.75rem;
  }
`;

export const CountryInfo = styled.div`
  font-size: inherit;
  ${(props) => props.hasList && countryInfoContainerStyle};

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const CountryInfoHeading = styled.span`
  font-weight: 600;
  text-transform: capitalize;
  margin-right: 0.4rem;
  ${(props) => props.changePositionToTop && "align-self: flex-start;"}
`;
export const CountryInfoText = styled.span``;

export const CountryList = styled.ul`
  list-style: none;
  ${display.flex};
  gap: 1rem;
  flex: 1;
  ${flex.wrap.wrap};
`;

export const CountryListItem = styled.li`
  height: 3rem;
  min-width: max-content;
  width: 9.6rem;
  padding: 0 1rem;
  cursor: pointer;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.body.text};
  background-color: ${({ theme }) => theme.colors.elements.bg};

  ${display.flex};
  ${flex.items.center};
  ${flex.justify.center};
  ${({ theme }) => boxShadow.default(theme)};
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    height: 3.5rem;
    width: 12.25rem;
  }
`;
