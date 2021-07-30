import GlobalStyles from "./global.styles";

import { ThemeProvider } from "styled-components";

import { Container } from "components/Container/Container.styles";
import { TopBackground } from "components/TopBackground/TopBackground.styles";
import Header from "components/Header/Header.component";
import { useContext } from "react";
import { ThemeContext } from "contexts/theme.context";
import Card from "components/Card/Card.component";

import data from "./data";
import CardList from "components/CardList/CardList.component";
import Overview from "components/Overview/Overview.component";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <TopBackground />
      <Container>
        <Header />
        <CardList>
          {Object.keys(data).map((platformName) => (
            <Card key={platformName} data={data[platformName]} />
          ))}
        </CardList>
        <Overview />
      </Container>
    </ThemeProvider>
  );
}

export default App;
