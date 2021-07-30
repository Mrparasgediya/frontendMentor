import styled, { css } from "styled-components";

const getStylesFromTheme = ({ theme }) => {
  const { colors } = theme;

  const themeStyles = css`
    background-color: ${colors.topBg};
  `;

  return themeStyles;
};

export const TopBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  height: 22.4rem;
  width: 100%;
  ${(props) => getStylesFromTheme(props)}

  @media (max-width: 768px) {
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    height: 30.5rem;
  }
`;
