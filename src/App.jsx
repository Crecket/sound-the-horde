import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import "./App.scss";
import Routes from "./Routes";

import siteConfig from "./Config/site";
import MuiTheme from "./Config/MuiTheme";

export const DrawerContext = React.createContext({});
const theme = createMuiTheme(MuiTheme);

const App = () => {
    const [open, setOpen] = React.useState(false);
    const toggleOpen = () => setOpen(!open);

    return (
        <div className="app">
            <BrowserRouter basename={siteConfig.baseName} forceRefresh={false}>
                <MuiThemeProvider theme={theme}>
                    <DrawerContext.Provider value={{ open, toggleOpen }}>
                        <Routes />
                    </DrawerContext.Provider>
                </MuiThemeProvider>
            </BrowserRouter>
        </div>
    );
};

export default App;
