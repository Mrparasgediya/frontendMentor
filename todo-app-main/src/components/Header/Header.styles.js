import styled, { css } from "styled-components";
import { ReactComponent as IconMoon } from "assets/images/icon-moon.svg";
import { ReactComponent as IconSun } from "assets/images/icon-sun.svg";
import colors from "assets/styles/colors";

export const Header = styled.header`
  margin-top: 2.8rem;
  padding: 5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const Heading = styled.h1`
  font-size: 3rem;
  color: ${colors.white};

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const defaultIconStyle = css`
  transform: scale(1);
  cursor: pointer;

  @media (max-width: 768px) {
    transform: scale(0.75);
  }
`;

export const SunIcon = styled(IconSun)`
  ${defaultIconStyle}
`;
export const MoonIcon = styled(IconMoon)`
  ${defaultIconStyle}
`;
