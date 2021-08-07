import { Switch, Route } from "react-router-dom";
import GlobalStyles from "./globalStyles";
import Home from "pages/Home/Home.page";
import { useHistory } from "react-router-dom";
import { Fragment, useContext, useEffect } from "react";
import Header from "components/Header/Header.component";
import Country from "pages/Country/Country";
import { CountryContext } from "contexts/country/country.context";
import useCountries from "hooks/useCountries";

function App() {
  const history = useHistory();

  const {
    countryActions: { setCountries },
  } = useContext(CountryContext);

  const countries = useCountries();

  useEffect(() => {
    setCountries(countries);
  }, [countries]);

  return (
    <Fragment>
      <GlobalStyles isHomePage={history.location.pathname === "/"} />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/countries/:countryName" component={Country} />
      </Switch>
    </Fragment>
  );
}

export default App;
