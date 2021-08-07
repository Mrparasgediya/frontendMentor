import { container, display, flex } from "assets/styles/utilities";
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

export const CountryStatusText = styled.div`
  min-height: 30vh;
  font-weight: 600;
  ${display.flex};
  ${flex.items.center};
  ${flex.justify.center};
`;
