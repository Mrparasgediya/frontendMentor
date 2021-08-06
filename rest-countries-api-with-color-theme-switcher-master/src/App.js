import { Switch, Route } from "react-router-dom";
import GlobalStyles from "./globalStyles";
import Home from "pages/Home/Home.page";
import { useHistory } from "react-router-dom";
import { Fragment } from "react";
import Header from "components/Header/Header.component";
import Country from "pages/Country/Country";

function App() {
  const history = useHistory();

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
