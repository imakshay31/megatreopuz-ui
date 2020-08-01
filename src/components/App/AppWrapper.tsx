import React from "react";
import theme from "../theme";
import HeadTags from "./head";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import "../firebase";
import firebase from "firebase/app";
import { RelayEnvironmentProvider } from "relay-hooks";
import { getEnvironment } from "../Relay/environment";
import { Environment } from "react-relay";
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
    const [currentTheme] = React.useState(theme);
    const env = React.useRef<Environment>(null);

    if (env.current === null) env.current = getEnvironment();

    return (
        <>
            <HeadTags mainColor={currentTheme.palette.primary.main} />
            <RelayEnvironmentProvider environment={getEnvironment()}>
                <ThemeProvider theme={currentTheme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </RelayEnvironmentProvider>
        </>
    );
};

export default AppWrapper;
