import React from "react";
import theme from "../theme";
import { Router } from "next/router";
import HeadTags from "./head";
import { CssBaseline, ThemeProvider, Fade } from "@material-ui/core";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import environment from "../../relay/environment";
import LoadingBar from "../loadingBar";
import { SnackbarProvider } from "notistack";
import { AppContextProvider } from "./appContext";

const AppWrapper: React.FC = ({ children }) => {
    React.useEffect(() => {
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    const [currentTheme] = React.useState(theme);
    const [loading, setLoading] = React.useState(false);

    Router.events.on("routeChangeStart", () => setLoading(true));
    Router.events.on("routeChangeComplete", () => setLoading(false));
    Router.events.on("routeChangeError", () => setLoading(false));

    return (
        <>
            <HeadTags mainColor={currentTheme.palette.primary.main} />
            <CssBaseline />
            <RelayEnvironmentProvider environment={environment}>
                <ThemeProvider theme={currentTheme}>
                    <Fade in={loading}>
                        <LoadingBar />
                    </Fade>
                    <SnackbarProvider hideIconVariant>
                        <AppContextProvider value={{ pageLoading: loading }}>
                            {children}
                        </AppContextProvider>
                    </SnackbarProvider>
                </ThemeProvider>
            </RelayEnvironmentProvider>
        </>
    );
};

export default AppWrapper;
