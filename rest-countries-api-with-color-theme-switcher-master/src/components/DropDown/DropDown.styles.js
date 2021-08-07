import { boxShadow, display, flex } from "assets/styles/utilities";
import { ReactComponent as IconArrowDown } from "assets/icons/arrow-down.svg";
import { ReactComponent as IconArrowUp } from "assets/icons/arrow-up.svg";

import styled, { css } from "styled-components";

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
  background-color: ${({ theme }) => theme.colors.elements.bg};
  border-radius: 5px;
  cursor: pointer;
  ${({ theme }) => boxShadow.default(theme)};
`;

const defaultIconsStyles = css`
  height: 1.4rem;
  width: 1.4rem;
  fill: ${({ theme }) => theme.colors.body.text};
`;

export const ArrowDownIcon = styled(IconArrowDown)`
  ${defaultIconsStyles}
`;

export const ArrowUpIcon = styled(IconArrowUp)`
  ${defaultIconsStyles}
`;
export const CurrentRegionText = styled.span`
  text-transform: capitalize;
`;
