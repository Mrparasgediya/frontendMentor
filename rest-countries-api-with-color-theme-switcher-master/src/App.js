import { Switch, Route } from "react-router-dom";
import GlobalStyles from "./globalStyles";
import Home from "pages/Home/Home.page";
import { useHistory } from "react-router-dom";
import { useContext, useEffect } from "react";
import Header from "components/Header/Header.component";
import Country from "pages/Country/Country";
import { CountryContext } from "contexts/country/country.context";
import useCountries from "hooks/useCountries";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "contexts/theme/theme.context";

function App() {
  const history = useHistory();

  const {
    countryActions: { setCountries },
  } = useContext(CountryContext);

  const {
    themeState: { currentTheme, themes },
  } = useContext(ThemeContext);

  const countries = useCountries();

  useEffect(() => {
    setCountries(countries);
  }, [countries]);

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <GlobalStyles isHomePage={history.location.pathname === "/"} />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/countries/:countryName" component={Country} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
