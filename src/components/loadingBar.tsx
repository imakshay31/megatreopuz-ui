import React from "react";
import {  LinearProgress } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => {
    return {
        loading: {
            zIndex: theme.zIndex.modal,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
        },
    };
});

const LoadingBar: React.FC = (props) => {
    const classes = useStyles();
    return (
        <LinearProgress
            className={classes.loading}
            color="secondary"
            {...props}
        />
    );
};

export default LoadingBar;
