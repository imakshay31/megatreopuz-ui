import React from "react";
import theme from "../theme";
import HeadTags from "./head";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

const AppWrapper: React.FC = ({ children }) => {
    React.useEffect(() => {
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);
    const [currentTheme] = React.useState(theme);

    return (
        <>
            <HeadTags mainColor={currentTheme.palette.primary.main} />
            <ThemeProvider theme={currentTheme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </>
    );
};

export default AppWrapper;
