import clsx from "clsx";
import React, { Suspense } from "react";
import theme from "../theme";
import { Router } from "next/router";
import HeadTags from "./head";
import {
    CssBaseline,
    ThemeProvider,
    Fade,
    makeStyles,
} from "@material-ui/core";
import LoadingBar from "../loadingBar";
import { SnackbarProvider } from "notistack";
import { AppContextProvider } from "./appContext";
import LoadingScreen from "../loadingScreen";

const useStyles = makeStyles(() => ({
    blurredMain: {
        filter: "blur(2px)",
        transition: "filter 300ms",
        pointerEvents: "none",
    },
}));

const AppWrapper: React.FC = ({ children }) => {
    React.useEffect(() => {
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);
    const classes = useStyles();
    const [currentTheme] = React.useState(theme);
    const [loading, setLoading] = React.useState(false);
    const [blockingLoading] = React.useState(false);

    Router.events.on("routeChangeStart", () => setLoading(true));
    Router.events.on("routeChangeComplete", () => setLoading(false));
    Router.events.on("routeChangeError", () => setLoading(false));

    return (
        <>
            <HeadTags mainColor={currentTheme.palette.primary.main} />
            <ThemeProvider theme={currentTheme}>
                <CssBaseline />
                <Fade in={loading}>
                    <LoadingBar />
                </Fade>
                <SnackbarProvider hideIconVariant>
                    <AppContextProvider value={{ pageLoading: loading }}>
                        <main
                            className={clsx(
                                blockingLoading && classes.blurredMain
                            )}>
                            {children}
                        </main>
                    </AppContextProvider>
                </SnackbarProvider>
            </ThemeProvider>
        </>
    );
};

export default AppWrapper;
