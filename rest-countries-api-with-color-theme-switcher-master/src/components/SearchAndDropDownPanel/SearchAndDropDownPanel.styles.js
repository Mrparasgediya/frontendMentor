import { display, flex } from "assets/styles/utilities";
import styled from "styled-components";

export const SearchAndDropDownPanelContainer = styled.div`
  ${display.flex};
  ${flex.items.center};
  ${flex.justify.between};
  @media (max-width: 768px) {
    ${flex.direction.col};
    ${flex.items.start};
    gap: 5.25rem;
  }
`;
