import React from "react";
import HeadTags from "./head";
import { CssBaseline, Button } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import "../firebase";
import firebase from "firebase/app";
import { createMuiTheme } from "@material-ui/core/styles";
import { RelayEnvironmentProvider } from "relay-hooks";
import { getEnvironment } from "../Relay/environment";
import { Environment } from "react-relay";
import {
    themeProps,
    defaultPrimary,
    defaultSecondary,
    defaultMode,
    toggleMode,
    themeContext,
} from "../theme";
import ThemeToggleButton from "../theme/modeToggle";
import ColorPicker from "./colorPicker";

const AppWrapper: React.FC = ({ children }) => {
    React.useEffect(() => {
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    React.useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                if (!user.emailVerified) {
                    try {
                        await user.sendEmailVerification();
                        console.log("Email sent");
                    } catch {
                        console.log("Error sending the verification email");
                    }
                }
            }
        });
    });

    const [currentTheme, setCurrentTheme] = React.useState(() =>
        createMuiTheme({
            props: themeProps,
            palette: {
                primary: {
                    main: defaultPrimary,
                },
                secondary: {
                    main: defaultSecondary,
                },
                type: defaultMode,
            },
        })
    );

    const env = React.useRef<Environment>(null);
    if (env.current === null) env.current = getEnvironment();

    return (
        <>
            <HeadTags mainColor={currentTheme.palette.primary.main} />
            <RelayEnvironmentProvider environment={getEnvironment()}>
                <ThemeProvider theme={currentTheme}>
                    <CssBaseline />
                    {/* <CustomDrawer
                        toggleTheme={() => setDarkTheme(!darkTheme)}
                        primaryColor={primary}
                        theme2={theme2}
                        changePrimaryColor={(a) => { handleColorPrimaryChange(a) }}
                        secondaryColor={secondary}
                        changeSecondaryColor={(a) => { handleColorSecondaryChange(a) }}
                        reset={() => Reset()}
                    > */}
                    <themeContext.Provider
                        value={{
                            mode: currentTheme.palette.type,
                            primary: currentTheme.palette.primary.main,
                            secondary: currentTheme.palette.secondary.main,
                            toggleMode: () => toggleMode(setCurrentTheme),
                            updateColors: () => {
                                /* Do nothing */
                            },
                        }}>
                        <main>{children}</main>
                    </themeContext.Provider>
                    {/* </CustomDrawer> */}
                </ThemeProvider>
            </RelayEnvironmentProvider>
        </>
    );
};

export default AppWrapper;
