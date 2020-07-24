import React from "react";
import {
    Button,
    Theme,
    Card,
    CardHeader,
    Avatar,
    Typography,
    CardContent,
    CardActions,
    Container,
    CircularProgress,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
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

interface Props {
    title: React.ReactNode;
    submitLabel: React.ReactNode;
    loading?: boolean;
    formID: string;
}

const FormPage: React.FC<Props> = ({
    submitLabel,
    loading,
    title,
    formID,
    children,
}) => {
    const classes = useStyles();
    const theme = useTheme();
    const buttonDisabled = loading;

    return (
        <>
            <section className={classes.section}>
                <Container maxWidth="sm">
                    <Card>
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
                                        alt="ISTE Logo"
                                        className={classes.logo}
                                    />
                                </figure>
                            }
                            subheader={
                                <Typography align="center" variant="subtitle2">
                                    {title}
                                </Typography>
                            }></CardHeader>
                        <CardContent>{children}</CardContent>
                        <CardActions classes={{ root: classes.action }}>
                            <Button
                                disabled={buttonDisabled}
                                form={formID}
                                type="submit"
                                aria-label={
                                    typeof submitLabel === "string"
                                        ? submitLabel
                                        : "Submit button"
                                }
                                variant="text">
                                {loading ? (
                                    <CircularProgress size={24} />
                                ) : (
                                    submitLabel
                                )}
                            </Button>
                        </CardActions>
                    </Card>
                </Container>
            </section>
        </>
    );
};

export default FormPage;
