import { createGlobalStyle } from "styled-components";
import { transition } from "assets/styles/variables";

const globalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  @media(max-width: 768px) {
    font-size:50%;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    transition: ${transition(["background-color", "color"])};
  }

  body {
    font-size: 1.4rem;
    font-family: "Inter", sans-serif;
    background-color: ${({ theme }) => theme.colors.body};
    position: relative;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export default globalStyles;
