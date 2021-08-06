import { boxShadow, container, display, flex } from "assets/styles/utilities";
import styled from "styled-components";
import { ReactComponent as ArrowBackIcon } from "assets/icons/arrow-forward.svg";

export const Container = styled.div`
  ${container.lg};
`;
export const ButtonContainer = styled.div`
  width: 100%;
  height: 20rem;
  ${display.flex};
  ${flex.items.center};

  @media (max-widht: 768px) {
    height: 17rem;
  }
`;

export const IconArrowBack = styled(ArrowBackIcon)`
  transform: rotate(180deg);
`;

export const Button = styled.button`
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

export const CountryImage = styled.img`
  height: 40rem;
  width: 56rem;
  object-fit: cover;
  @media (max-width: 768px) {
    height: 28.5rem;
    width: 100%;
  }
`;
export const CountryContainer = styled.div`
  ${display.flex};
  gap: 12rem;
  @media (max-width: 768px) {
    ${flex.direction.col};
    gap: 0;
  }
`;

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
