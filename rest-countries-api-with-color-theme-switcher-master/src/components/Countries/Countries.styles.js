import styled from "styled-components";
import { display, flex } from "assets/styles/utilities";

export const CounriesContainer = styled.div`
  ${display.flex};
  ${flex.wrap.wrap};
  gap: 7.4rem;
  @media (max-width: 768px) {
    ${flex.direction.col};
    ${flex.items.center};
    gap: 5rem;
  }
`;
