import { container } from "assets/styles/utilities";
import styled from "styled-components";
import { display, flex } from "assets/styles/utilities";

export const Home = styled.div`
  ${container.lg};
  margin-top: 4.8rem;
  ${display.flex};
  ${flex.direction.col};
  gap: 4.8rem;
  padding-bottom: 10rem;

  @media (max-width: 768px) {
    margin-top: 2.5rem;
    gap: 4rem;
  }
`;
