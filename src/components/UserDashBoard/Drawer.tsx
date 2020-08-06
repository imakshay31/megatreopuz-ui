import React from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(() => ({}));

const CustomDrawer: React.FC = () => {
    const classes = useStyles();
    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">News</Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
};

export default CustomDrawer;
