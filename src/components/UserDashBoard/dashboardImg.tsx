import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Box, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
    },
    header: {
      [theme.breakpoints.down("sm")]: {
        paddingLeft: theme.spacing(3),
      },
    },
    dashboardImg: {
      width: "80%",
      [theme.breakpoints.down("sm")]: {
        width: "40%",
      },
    },
  })
);
interface props {
  name: string;
}
const DashboardImg: React.FC<props> = ({ name }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box mt={5} mb={5} className={classes.header}>
        <Grid container justify="flex-start" alignItems="center">
          <Grid item sm={4} alignItems="center">
            <img src="/dashboard.png" className={classes.dashboardImg}></img>
          </Grid>
          <Grid item sm={8}>
            <Typography variant="h4">
              <b>Hello, {name[0].toUpperCase() + name.substring(1)}</b>
            </Typography>
            <Typography>Welcome to your ChimeraX dashboard</Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default DashboardImg;
