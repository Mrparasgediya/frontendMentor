import { useContext } from "react";
import GLobalStyles from "./global.styles";
import HomePage from "pages/Home/Home.page";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "contexts/theme/theme.context";

function App() {
  const { themeState } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={themeState.theme}>
      <GLobalStyles />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
