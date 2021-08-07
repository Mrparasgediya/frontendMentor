import React from "react";
import CountryProvider from "./country/country.context";
import ThemeProvider from "./theme/theme.context";

function Provider({ children }) {
  return (
    <ThemeProvider>
      <CountryProvider>{children}</CountryProvider>
    </ThemeProvider>
  );
}

export default Provider;
