import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

import registerServiceWorker from "./registerServiceWorker";
import { injectGlobal, theme, ThemeProvider } from "./theme";

// ¯\_(ツ)_/¯
/* tslint:disable */
injectGlobal`
    * {
    margin: 0;
    padding: 0;
    font-family: PTSans;
  }
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
