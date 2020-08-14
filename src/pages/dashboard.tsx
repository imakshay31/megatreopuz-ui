import React from "react";
import { NextPage } from "next";
import { Button, Grid, Divider, Box } from "@material-ui/core";
import Drawer from "../components/UserDashBoard/Drawer";
import CustomCard from "../components/App/card";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import FaceIcon from "@material-ui/icons/Face";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import BrushIcon from "@material-ui/icons/Brush";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        chart: {
            width: "40%",
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: theme.spacing(5),
        },
        main: {
            minHeight: "100vh",
            padding: theme.spacing(8, 2),
            [theme.breakpoints.up("sm")]: {
                padding: theme.spacing(4, 2, 0, 10),
            },
        },
        button: {
            margin: theme.spacing(2),
        },
        buttonContainer: {
            width: "40%",
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            marginTop: theme.spacing(2),
        },
        b: { width: "250px", marginLeft: "auto", marginRight: "auto" },
    })
);

const UserDashboard: NextPage = () => {
    const classes = useStyles();
    return (
        <>
            <Drawer />
            <section className={classes.main}>
                <Grid container justify="center" spacing={3}>
                    <Grid item lg={4} md={6} xs={12}>
                        <CustomCard
                            Icon={FaceIcon}
                            color={"#fb8c00"}
                            heading={"Rank"}
                            data={"2/400"}
                            unit={"position"}
                            caption={
                                "Shows your rank among total number of participants in Contest"
                            }
                        />
                    </Grid>
                    <Grid item lg={4} md={6} xs={12}>
                        <CustomCard
                            Icon={BrushIcon}
                            color={"#2196F3"}
                            heading={"Total attempts"}
                            data={"5"}
                            unit={"attempts"}
                            caption={
                                "Shows total number of attempts made by you in Contest"
                            }
                        />
                    </Grid>
                    <Grid item lg={4} md={6} xs={12}>
                        <CustomCard
                            Icon={SpellcheckIcon}
                            color={"#55B05D"}
                            heading={"Correct Questions"}
                            data={"5/25"}
                            unit={"questions"}
                            caption={
                                "Shows how much questions you have done correctly"
                            }
                        />
                    </Grid>
                    <Grid item lg={4} md={6} xs={12}>
                        <CustomCard
                            Icon={AccessAlarmsIcon}
                            color={"#E7403B"}
                            heading={"Time Left"}
                            data={"6d 12h"}
                            unit={"time"}
                            caption={
                                "Shows time remaining for contest to be concluded CD Working"
                            }
                        />
                    </Grid>
                </Grid>
            </section>
        </>
    );
};

export default UserDashboard;
