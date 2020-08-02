import React from "react";
import theme from "../theme";
import HeadTags from "./head";
import { CssBaseline } from "@material-ui/core";
import Drawer from "./../UserDashBoard/Drawer"
import { ThemeProvider, Theme } from "@material-ui/core/styles";
import { useRouter } from "next/dist/client/router";
import { set } from 'lodash-es'

const AppWrapper: React.FC = ({ children }) => {
    React.useEffect(() => {
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);
    const darkTheme: Theme = set(theme, "palette.type", "dark")
    const [currentTheme, setTheme] = React.useState(darkTheme);
    const router = useRouter()
    const path = router.route.split("/")

    return (
        <>
            <HeadTags mainColor={currentTheme.palette.primary.main} />
            <ThemeProvider theme={currentTheme}>

                <CssBaseline />
                {path[0] == "UserDashBoard" ? <Drawer children={children}></Drawer> : children}

            </ThemeProvider>
        </>
    );
};

export default AppWrapper;
