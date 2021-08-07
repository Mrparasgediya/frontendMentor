import { display, flex } from "assets/styles/utilities";
import styled from "styled-components";

export const CountryDetailsContainer = styled.div``;
export const CountryName = styled.h2`
  font-size: 2.4rem;
  font-weight: 800;
  margin-top: 5rem;

  @media (max-width: 768px) {
    margin-top: 6rem;
  }
`;

export const CountryInfoMainContainer = styled.div`
  ${display.flex};
  gap: 14.4rem;
  margin: 3.8rem 0;
  @media (max-width: 768px) {
    margin: 4rem 0;
    ${flex.direction.col};
    gap: 6.5rem;
  }
`;

export const CountryInfoContainer = styled.div``;
export const BorderCountriesContainer = styled.div`
  margin: 3.8rem 0;
`;
export const BorderCountriesHeading = styled.div``;
export const BorderCountriesList = styled.ul``;
export const BorderCountriesListItem = styled.li``;
