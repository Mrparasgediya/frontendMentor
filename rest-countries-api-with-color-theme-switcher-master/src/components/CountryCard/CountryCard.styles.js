import colors from "assets/styles/colors";
import {
  borderRadius,
  boxShadow,
  display,
  flex,
} from "assets/styles/utilities";
import styled from "styled-components";

export const CountryCard = styled.div`
  flex-basis: 264px;
  overflow: hidden;
  padding-bottom: 1.8rem;
  min-height: 33.6rem;
  background-color: ${colors.white};
  ${borderRadius.default};
  ${boxShadow.default};
  ${display.flex};
  ${flex.direction.col};
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: 78%;
    min-height: 42rem;
  }
`;

export const CountryFlag = styled.img`
  width: 100%;
  height: 16rem;
  object-fit: cover;
  object-position: center;

  @media (max-width: 768px) {
    height: 20.25rem;
  }
`;

export const CountryName = styled.h3`
  margin-bottom: 2.2rem;
  font-size: 1.6rem;
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const CountryDataContainer = styled.div`
  flex: 1;
  padding: 2.8rem 2.4rem;

  @media (max-width: 768px) {
    padding: 3.75rem 3.25rem;
  }
`;
