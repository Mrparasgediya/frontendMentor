import { createGlobalStyle } from "styled-components";
import { colors } from "assets/styles/variables";

const globalStyles = createGlobalStyle` 

  html {
    font-size: 93.75%;
    box-sizing: border-box;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${colors.cayanLightBg};
    font-family: "Spartan", sans-serif;
  }

  ul {
    list-style: none;
  }

  @media (max-width: 768px) {
    html {
      font-size: 43.75%;
    }
  }
`;

export default globalStyles;
