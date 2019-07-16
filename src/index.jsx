import React from "react";
import { hydrate, render } from "react-dom";
import { loadComponents, getState } from "loadable-components";

import App from "./App";

// store the loadable state so it can be used with the pre-rendered html
if (window) window.snapSaveState = () => getState();

const application = <App />;
const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
    // wait for loadable to finish loading external scripts
    loadComponents().then(() => {
        hydrate(application, rootElement);
    });
} else {
    render(application, rootElement);

    // if (process.env.NODE_ENV === "development" && module.hot) {
    //     module.hot.accept("./App", () => {
    //         const NextApp = require("./App").default;
    //         render(<NextApp />, rootElement);
    //     });
    // }
}
