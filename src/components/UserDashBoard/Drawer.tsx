import React from 'react';
import { createStyles, Theme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import clsx from "clsx";
import GamepadIcon from '@material-ui/icons/Gamepad';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import PickerDialog from '../App/colorPicker'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import MailIcon from '@material-ui/icons/Mail';
import InfoIcon from '@material-ui/icons/Info';
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Avatar, IconButton, Switch, Badge, Container, Grid, Paper, Box, SwipeableDrawer } from '@material-ui/core';
import Card from "../App/card"
import Demo from "./Charts"
import { Chart } from '@devexpress/dx-react-chart';
import theme from '../theme';

const drawerWidth = 320;

const useStyles = makeStyles((theme: Theme) =>
    ({
        root: {
            display: "flex"
        },
        toolbar: {
            paddingRight: 24 // keep right padding when drawer closed
        },
        toolbarIcon: {
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "0 8px",
            ...theme.mixins.toolbar
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            })
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            })
        },
        menuButton: {
            marginRight: 36
        },
        menuButtonHidden: {
            display: "none"
        },
        title: {
            flexGrow: 1
        },
        drawerPaper: {
            position: "relative",
            whiteSpace: "nowrap",
            width: drawerWidth,
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            })
        },
        drawerPaperClose: {
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up("sm")]: {
                width: theme.spacing(9)
            }
        },
        appBarSpacer: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            height: "100vh",
            overflow: "auto"
        },
        container: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4)
        },
        paper: {
            padding: theme.spacing(2),
            display: "flex",
            overflow: "auto",
            flexDirection: "column"
        },
        fixedHeight: {
            height: 240
        }
    })
);

const iconMap = [
    {
        label: "Contest",
        icon: <GamepadIcon />
    },
    {
        label: "Dashboard",
        icon: <DashboardIcon />
    },
    {
        label: "Update Info",
        icon: <InfoIcon />
    },
    {
        label: "Leader-Board",
        icon: <ImportantDevicesIcon />
    },
    {
        label: "Log Out",
        icon: <ExitToAppIcon />
    },


]
interface Props {
    children?: React.ReactNode
    toggleTheme: () => void
    primaryColor: string,
    changePrimaryColor: (color: string) => void
    theme2: Theme
    secondaryColor: string,
    changeSecondaryColor: (color: string) => void
    reset: () => void
}


const CustomDrawer: React.FC<Props> = ({ children, toggleTheme, primaryColor, changePrimaryColor, theme2, secondaryColor, changeSecondaryColor, reset }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [colorOpen, setColorOpen] = React.useState(false)
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };



    return (
        <ThemeProvider theme={theme2}>
            <CssBaseline />
            <div className={classes.root}>

                <AppBar
                    position="absolute"
                    className={clsx(classes.appBar, open && classes.appBarShift)}
                >
                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            className={clsx(
                                classes.menuButton,
                                open && classes.menuButtonHidden
                            )}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            className={classes.title}
                        >
                            Megatreopuz
                        </Typography>
                        {/* <Switch checked={true} onChange={() => console.log("hi")} /> */}
                        <IconButton color="inherit" onClick={() => toggleTheme()}>
                            {theme.palette.type == "dark" ? <Brightness5Icon /> : <Brightness4Icon />}
                        </IconButton>
                        <IconButton color="inherit" onClick={() => setColorOpen(!colorOpen)}>
                            <InvertColorsIcon />

                        </IconButton>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <SwipeableDrawer
                    variant="permanent"
                    anchor={"left"}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    classes={{
                        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
                    }}
                    open={open}
                >
                    <div className={classes.toolbarIcon}>
                        <IconButton onClick={handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <Avatar>D</Avatar>
                            </ListItemIcon>
                            <ListItemText primary={"Devansh Kumar Sharma"} secondary={"@devansh"} />
                        </ListItem>
                    </List>
                    <Divider />
                    <List><div>

                        {iconMap.map((icon, index) =>
                            (<ListItem button key={index}>
                                <ListItemIcon>
                                    {icon.icon}
                                </ListItemIcon>
                                <ListItemText primary={icon.label} />
                            </ListItem>)
                        )}</div></List>
                    <Divider />
                </SwipeableDrawer>
                <main className={classes.content}>
                    {children}
                </main>
                {colorOpen && <PickerDialog valuePrim={primaryColor} setPrimary={changePrimaryColor} valueSec={secondaryColor} setSecondary={changeSecondaryColor} reset={reset} onClose={() => setColorOpen(false)} />}
            </div>
        </ThemeProvider>
    );
}

export default CustomDrawer