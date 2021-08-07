import React from "react";
import CountryProvider from "./country/country.context";

function Provider({ children }) {
  return <CountryProvider>{children}</CountryProvider>;
}

export default Provider;
