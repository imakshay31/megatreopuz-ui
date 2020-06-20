import React from "react";
import { makeStyles, Theme, CircularProgress, fade } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    loadingSection: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: theme.zIndex.modal,
        background: fade(theme.palette.background.default, 0.7),
    },
}));

const LoadingScreen: React.FC = () => {
    const classes = useStyles();

    return (
        <section className={classes.loadingSection}>
            <CircularProgress size="5rem" color="secondary" />
        </section>
    );
};

export default LoadingScreen;
