import { boxShadow, display, flex } from "assets/styles/utilities";
import { ReactComponent as IconArrowDown } from "assets/icons/arrow-down.svg";
import { ReactComponent as IconArrowUp } from "assets/icons/arrow-down.svg";

import styled from "styled-components";

export const DropDown = styled.div`
  height: 5.6rem;
  width: 20rem;
  border-radius: 5px;
  position: relative;
  z-index: 2;
`;

export const DropDownSelectedOption = styled.div`
  ${display.flex};
  ${flex.items.center};
  ${flex.justify.between};
  padding: 2rem 2.4rem;
  height: 100%;
  width: 100%;
  background: white;
  border-radius: 5px;
  cursor: pointer;
  ${boxShadow.default};
`;

export const ArrowDownIcon = styled(IconArrowDown)`
  height: 1.2rem;
  width: 1.2rem;
`;

export const ArrowUpIcon = styled(IconArrowUp)`
  height: 1.2rem;
  width: 1.2rem;
`;
