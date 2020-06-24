import React, { useEffect } from "react";
import { makeStyles, Theme, CircularProgress, fade } from "@material-ui/core";
import { useBlurMain } from "./Hooks/useBlurMain";

const useStyles = makeStyles((theme: Theme) => ({
    loadingSection: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: theme.zIndex.modal,
        background: fade(theme.palette.common.black, 0.5),
    },
}));

const LoadingScreen: React.FC = () => {
    const classes = useStyles();
    const toggleBlur = useBlurMain();

    useEffect(() => {
        toggleBlur(true);
        return () => toggleBlur(false);
    }, [toggleBlur]);

    return (
        <section className={classes.loadingSection}>
            <CircularProgress size="5rem" color="secondary" />
        </section>
    );
};

export default LoadingScreen;
