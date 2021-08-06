import colors from "assets/styles/colors";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%; //10px
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
    position:relative;
    padding-top: 8rem;
    font-size: ${(props) => (props.isHomePage ? "1.4rem" : "1.6rem")};
    font-family: "Nunito Sans", sans-serif;
    background-color: ${colors.gray.veryLight};
  }

  @media(max-width:768px) {
    html{
      font-size : 50%; //8px
    }
    body{
      padding-top:10rem;
        font-size: ${(props) => (props.isHomePage ? "1.5rem" : "2rem")};
    }
  }
`;

export default GlobalStyles;
