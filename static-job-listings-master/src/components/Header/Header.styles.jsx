import styled from "styled-components";
import { ReactComponent as HeaderBgImage } from "assets/images/bg-header-desktop.svg";
import { colors } from "assets/styles/variables";

export const HeaderContainer = styled(HeaderBgImage)`
  width: 100%;
  height: 10.4rem;
  background-color: ${colors.primary};
`;
