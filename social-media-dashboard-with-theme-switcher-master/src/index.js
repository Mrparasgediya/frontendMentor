import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import ThemeProvider from "contexts/theme.context";

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
