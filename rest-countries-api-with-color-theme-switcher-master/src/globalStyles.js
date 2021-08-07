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
    background-color: ${({ theme }) => theme.colors.body.bg};
    color: ${({ theme }) => theme.colors.body.text};
    transition: color .3s ease-in-out, background-color .3s ease-in-out;
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
