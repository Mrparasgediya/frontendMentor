import styled, { css } from "styled-components";
import { ReactComponent as OutlinedMoonIcon } from "assets/icons/moon-outline.svg";
import { ReactComponent as FilledMoonIcon } from "assets/icons/moon.svg";

const defaultIconStyles = css`
  height: 1.8rem;
  width: 1.8rem;
`;

export const MoonIcon = styled(OutlinedMoonIcon)`
  ${defaultIconStyles}
`;
export const ActiveMoonIcon = styled(FilledMoonIcon)`
  ${defaultIconStyles}
`;
