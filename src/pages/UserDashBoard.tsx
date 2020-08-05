import React from "react"
import { NextPage } from "next"
import { Button, Grid, } from "@material-ui/core"
import Drawer from "./../components/UserDashBoard/Drawer"
import CustomCard from "../components/App/card"
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import FaceIcon from '@material-ui/icons/Face';
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import BrushIcon from '@material-ui/icons/Brush';
import Chart, { data } from "./../components/UserDashBoard/Charts"
import GamepadIcon from '@material-ui/icons/Gamepad';
import ContactMailIcon from '@material-ui/icons/ContactMail';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            padding: theme.spacing(1),

        },
        custom: {
            margin: theme.spacing(0)
        },
        chart: {
            width: "40%", marginRight: "auto", marginLeft: "auto",
            marginTop: theme.spacing(5)
        },
        main: {
            zIndex: 0,
            width: "95%",
            marginLeft: "auto",
            marginRight: "auto"
        },
        button: {
            margin: theme.spacing(2)
        },
        buttonContainer: {
            width: "40%",
            marginLeft: "auto",
            marginRight: "auto",
            display:"flex",
            marginTop:theme.spacing(2)

        }, b: { width: "250px", marginLeft: "auto", marginRight: "auto" }

    }),
);



const UserDashboard: NextPage = () => {

    const [drawer, setDrawer] = React.useState(false)


    const classes = useStyles()
    return <div className={classes.main}>


        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item lg={3} md={6} sm={12} className={classes.custom}>
                    <CustomCard Icon={FaceIcon} color={"#fb8c00"} heading={"Rank"} data={"2/400"} unit={"position"} caption={"Shows your rank among total number of participants in Contest"} />
                </Grid>
                <Grid item lg={3} md={6} sm={12} className={classes.custom}>
                    <CustomCard Icon={BrushIcon} color={"#2196F3"} heading={"Total attempts"} data={"5"} unit={"attempts"} caption={"Shows total number of attempts made by you in Contest"} />
                </Grid>
                <Grid item lg={3} md={6} sm={12} className={classes.custom}>
                    <CustomCard Icon={SpellcheckIcon} color={"#55B05D"} heading={"Correct Questions"} data={"5/25"} unit={"questions"} caption={"Shows how much questions you have done correctly"} />
                </Grid>
                <Grid item lg={3} md={6} sm={12} className={classes.custom}>
                    <CustomCard Icon={AccessAlarmsIcon} color={"#E7403B"} heading={"Time Left"} data={"6d 12h"} unit={"time"} caption={"Shows time remaining for contest to be concluded"} />
                </Grid>
            </Grid>
        </div>
        <div className={classes.chart}>
            <Chart data={data} />
        </div>
        <div className={classes.buttonContainer}>
        <div className={classes.b}>
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
            >
                Terms & Conditions
                
      </Button>
      </div>
            <div className={classes.b}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}

                >
                    Proceed to contest
          </Button>
            </div>
        </div>


    </div>

}

export default UserDashboard