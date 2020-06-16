import React from "react";
import { CircularProgress, makeStyles, fade } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
    return {
        section: {
            zIndex: theme.zIndex.modal,
            position: "fixed",
            background: fade(theme.palette.secondary.contrastText, 0.8),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        },
    };
});

const LoadingScreen: React.FC = (props) => {
    const classes = useStyles();
    return (
        <section {...props} className={classes.section}>
            <CircularProgress size="5rem" color="secondary" />
        </section>
    );
};

export default LoadingScreen;
