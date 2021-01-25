import React from "react";
import { NextPage } from "next";
import { Grid, CssBaseline } from "@material-ui/core";
// import Drawer from "../../components/UserDashBoard/Drawer";
import CustomCard from "../../components/App/card";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import FaceIcon from "@material-ui/icons/Face";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import BrushIcon from "@material-ui/icons/Brush";
import { ProtectedPageProps } from "../_app";
// import Navbar from "../../components/navbar";
import CustomDrawer from "../../components/UserDashBoard/CustomDrawer";
import DashboardImg from "../../components/UserDashBoard/dashboardImg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      height: "100vh",
    },
    chart: {
      width: "40%",
      marginRight: "auto",
      marginLeft: "auto",
      marginTop: theme.spacing(5),
    },
    main: {
      flexGrow: 1,
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

const UserDashboard: NextPage<ProtectedPageProps> = ({
  viewer,
  // refetch,
  // ...props
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Drawer name={viewer.name} username={viewer.userName} /> */}
      <CssBaseline />
      <CustomDrawer name={viewer.name} username={viewer.userName} />
      <main className={classes.main}>
        <DashboardImg name={viewer.name} />
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
          {alert}
          <Grid item lg={4} md={6} xs={12}>
            <CustomCard
              Icon={BrushIcon}
              color={"#2196F3"}
              heading={"Total attempts"}
              data={"5"}
              unit={"attempts"}
              caption={"Shows total number of attempts made by you in Contest"}
            />
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <CustomCard
              Icon={SpellcheckIcon}
              color={"#55B05D"}
              heading={"Correct Questions"}
              data={"5/25"}
              unit={"questions"}
              caption={"Shows how much questions you have done correctly"}
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
                "Shows time remaining for contest to be concluded CD is Working"
              }
            />
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default UserDashboard;
