import React from "react";
import theme, { themeGen } from "../theme";
import HeadTags from "./head";
import { CssBaseline, PaletteType } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import "../firebase";
import firebase from "firebase/app";
import { createMuiTheme } from "@material-ui/core/styles"
import { RelayEnvironmentProvider } from "relay-hooks";
import { getEnvironment } from "../Relay/environment";
import { Environment } from "react-relay";
import CustomDrawer from "../UserDashBoard/Drawer";
import { dark } from "@material-ui/core/styles/createPalette";
import blue from "@material-ui/core/colors/blue";
const AppWrapper: React.FC = ({ children }) => {
    React.useEffect(() => {
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    // React.useEffect(() => {
    //     firebase.auth().onAuthStateChanged(async (user) => {
    //         if (user) {
    //             if (!user.emailVerified) {
    //                 try {
    //                     await user.sendEmailVerification();
    //                     console.log("Email sent");
    //                 } catch {
    //                     console.log("Error sending the verification email");
    //                 }
    //             }
    //         }
    //     });
    // });

    const defaultPrimary = "#2196f3"
    const defaultSecondary = "#F64857"
    const [darkTheme, setDarkTheme] = React.useState(false)
    const palleteType: PaletteType = darkTheme ? "dark" : "light"
    const [primary, setPrimary] = React.useState("#2196f3")
    const [secondary, setSecondary] = React.useState("#F64857")
    const theme2 = createMuiTheme({
        palette: {
            type: palleteType,
            primary: {
                main: primary,
            },
            secondary: {
                main: secondary
            }
        },
        props: {
            MuiTextField: {
                variant: "outlined",
                margin: "dense",
            },
        },
    });

    const Reset = () => {
        setPrimary(defaultPrimary)
        setSecondary(defaultSecondary)
        localStorage.setItem("primary", defaultPrimary)
        localStorage.setItem("secondary", defaultSecondary)
        localStorage.setItem("dark", "false")
    }


    const [currentTheme, setCurrentTheme] = React.useState(theme2);



    React.useEffect(() => {
        if (primary != defaultPrimary)
            localStorage.setItem("primary", primary)
        if (secondary != defaultSecondary)
            localStorage.setItem("secondary", secondary)
        if (darkTheme) {
            localStorage.setItem("dark", "true")
        }
    }, [theme2])

    React.useEffect(() => {
        const primaryC = localStorage.getItem("primary")
        primaryC ? setPrimary(primaryC) : ""
        const secondaryC = localStorage.getItem("secondary")
        secondaryC ? setSecondary(secondaryC) : ""
        const dark = localStorage.getItem("dark")
        dark == "true" ? setDarkTheme(true) : ""
    }, [])



    const env = React.useRef<Environment>(null);

    if (env.current === null) env.current = getEnvironment();
    const handleColorPrimaryChange = (a) => {
        const s = a.hex

        s ? setPrimary(s) : ""
    }
    const handleColorSecondaryChange = (a) => {

        const s = a.hex

        setSecondary(s)
    }

    return (
        <>
            <HeadTags mainColor={currentTheme.palette.primary.main} />
            <RelayEnvironmentProvider environment={getEnvironment()}>

                <ThemeProvider theme={currentTheme}>

                    <CssBaseline />
                    <CustomDrawer
                        toggleTheme={() => setDarkTheme(!darkTheme)}
                        primaryColor={primary}
                        theme2={theme2}
                        changePrimaryColor={(a) => { handleColorPrimaryChange(a) }}
                        secondaryColor={secondary}
                        changeSecondaryColor={(a) => { handleColorSecondaryChange(a) }}
                        reset={() => Reset()}
                    >
                        {children}
                    </CustomDrawer>

                </ThemeProvider>
            </RelayEnvironmentProvider>
        </>
    );
};

export default AppWrapper;




