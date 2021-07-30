import { createGlobalStyle } from "styled-components";

const GLobalStyles = createGlobalStyle`
  html {
    font-size: 10px;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    user-select: none;
    transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  }

  body {
    position: relative;
    font-size: 1.8rem;
    font-family: "Josefin Sans", sans-serif;
    background-color: ${({ theme }) => theme.colors.bg.body};
  }

  @media (max-width: 768px) {
    html {
      font-size: 8px;
    }
    body {
      font-size: 1.5rem;
    }

    *,
    *::before,
    *::after {
      cursor: auto !important;
    }
    
  }
`;

export default GLobalStyles;
