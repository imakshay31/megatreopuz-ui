import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import {
    makeStyles,
    Button,
    Theme,
    Card,
    CardHeader,
    Avatar,
    Typography,
    useTheme,
    CardContent,
    CardActions,
    LinearProgress,
    Fade,
} from "@material-ui/core";
import LoginForm from "../components/Login/form";

const useStyles = makeStyles((theme: Theme) => ({
    section: {
        minHeight: "100vh",
        backgroundColor:
            theme.palette.type === "dark"
                ? theme.palette.primary.light
                : theme.palette.primary.dark,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23cc0000' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23aa0000' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23d6002b' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23b10022' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23d9004b' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23b2003d' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23d3006c' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23ac0057' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23c4008c' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%239e0071' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23aa00aa' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23880088' points='943 900 1210 900 971 687'/%3E%3C/svg%3E")`,
        backgroundAttachment: `fixed`,
        backgroundSize: `cover`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        height: 80,
        width: 80,
    },
    card: {
        minWidth: 500,
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
    },
    figure: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    action: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: theme.spacing(2),
    },
}));
const Page: NextPage = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [loading, setLoading] = useState(false);
    const [showLoader, setLoader] = useState(false);

    useEffect(() => {
        if (loading !== showLoader) setTimeout(() => setLoader(true), 1000);
        if (!loading && showLoader) setLoader(false);
    });

    return (
        <section className={classes.section}>
            <Card className={classes.card}>
                <Fade in={showLoader}>
                    <LinearProgress color="secondary" />
                </Fade>
                <CardHeader
                    disableTypography
                    title={
                        <figure className={classes.figure}>
                            <Avatar
                                src={
                                    theme.palette.type === "dark"
                                        ? "/logoDark.png"
                                        : "/logo.jpg"
                                }
                                className={classes.logo}
                            />
                        </figure>
                    }
                    subheader={
                        <Typography align="center" variant="subtitle2">
                            Megatreopuz - Annual online cryptic hunt
                        </Typography>
                    }></CardHeader>
                <CardContent>
                    <LoginForm
                        onSubmit={() => {
                            setLoading(true);
                        }}
                    />
                </CardContent>
                <CardActions classes={{ root: classes.action }}>
                    <Button
                        disabled={loading}
                        form="login-form"
                        type="submit"
                        variant="text">
                        Sign In
                    </Button>
                </CardActions>
            </Card>
        </section>
    );
};

export default Page;
