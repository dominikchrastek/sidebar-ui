import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { injectGlobal, theme, ThemeProvider } from "./theme";

// ¯\_(ツ)_/¯
/* tslint:disable */
injectGlobal`
  body, html, #root {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: PTSans;
  }

  * {
    margin: 0;
    padding: 0;
  }
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
