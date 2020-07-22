import clsx from "clsx";
import React from "react";
import theme from "../theme";
import { Router } from "next/router";
import HeadTags from "./head";
import { CssBaseline, Fade } from "@material-ui/core";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import LoadingBar from "../loadingBar";
import { SnackbarProvider } from "notistack";
import { BlurMainProvider } from "../Hooks/useBlurMain";
import { AppContextProvider } from "../Hooks/useAppContext";
import "../Firebase";
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
    const [blockingPopup, setBlockingPopup] = React.useState(false);

    Router.events.on("routeChangeStart", () => {
        setLoading(true);
    });
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
                    <AppContextProvider
                        value={{
                            blockingPopup,
                            routeLoading: loading,
                        }}>
                        <BlurMainProvider value={setBlockingPopup}>
                            <main
                                className={clsx(
                                    blockingPopup && classes.blurredMain
                                )}>
                                {children}
                            </main>
                        </BlurMainProvider>
                    </AppContextProvider>
                </SnackbarProvider>
            </ThemeProvider>
        </>
    );
};

export default AppWrapper;
