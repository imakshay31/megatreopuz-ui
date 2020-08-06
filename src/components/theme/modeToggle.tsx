import React, { useContext } from "react";
import { themeContext } from ".";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import { makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
const useStyles = makeStyles((theme: Theme) => ({
    button: {
        all: "unset",
        display: "flex",
        borderRadius: 50,
        color: theme.palette.common.white,
        borderStyle: "solid",
        cursor: "pointer",
        background:
            theme.palette.type !== "dark" ? `rgb(38,133,241)` : `rgb(23,0,147)`,
        backgroundImage:
            theme.palette.type !== "dark"
                ? `linear-gradient(90deg, rgba(38,133,241,1) 0%, rgba(29,205,253,1) 50%, rgba(0,204,255,1) 100%)`
                : `linear-gradient(90deg, rgba(23,0,147,1) 0%, rgba(0,8,189,1) 50%, rgba(92,78,169,1) 100%);`,
    },
    icon: {
        transform: `translateY(-100%)`,
        transition: `transform 500ms`,
        padding: 3,
    },
    visibleIcon: {
        transform: `translateY(0)`,
    },
}));

const ThemeToggleButton: React.FC = () => {
    const classes = useStyles();
    const themeCtx = useContext(themeContext);
    return (
        <button className={classes.button} onClick={themeCtx.toggleMode}>
            <WbSunnyIcon
                color="inherit"
                className={clsx(
                    classes.icon,
                    themeCtx.mode === "light" && classes.visibleIcon
                )}
            />
            <Brightness2Icon
                color="inherit"
                className={clsx(
                    classes.icon,
                    themeCtx.mode === "dark" && classes.visibleIcon
                )}
            />
        </button>
    );
};
export default ThemeToggleButton;
