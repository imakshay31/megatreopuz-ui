import React from "react";
import { NextPage } from "next";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { ProtectedPageProps } from "../_app";
import CustomDrawer from "../../components/UserDashBoard/CustomDrawer";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      height: "100vh",
    },
    loading: {
      // margin: "0",
      marginLeft: "auto",
      marginRight: "auto",
      width: "100%",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
    },
    instructionBox: {
      padding: theme.spacing(2, 10),
      [theme.breakpoints.down("xs")]: {
        padding: theme.spacing(2),
      },
    },
  })
);

const UserDashboard: NextPage<ProtectedPageProps> = ({
  viewer,
  // refetch,
  // ...props
}) => {
  const classes = useStyles();

  const instructions = [
    "1. Megatreopuz '21 will be live from 13th February 2020 to 19th February 2020.",
    "2. A participant will receive successive questions. He/she will keep receiving questions until the cryptic hunt ends.",
    "3. If a person is able to solve the most number of questions in the least amount of time, he/she will be declared as the winners.",
    "4. The competition is open to everyone, there are no restrictions whatsoever.",
    "5. All participants are to answer according to the following instructions:",
    "6. In any case, the decision of ISTE SC MANIT will be final.",
    "7. ISTE SC MANIT holds the right to disqualify a contestant if he/she indulges in any unfair practice.",
    "8. The winners need to be an account holder in an Indian bank to claim his/her cash prize.",
  ];
  const answerInstructions = [
    "1. His/Her answers can be case insensitive.",
    "2. He/She should not leave any space between the words of the answer.",
    "3. He/She should not special symbols and numbers while answering the questions.",
  ];
  return (
    <div className={classes.root}>
      <CustomDrawer
        name={viewer.name}
        username={viewer.userName}
        page={"Instructions"}
      />
      <Toolbar />
      <Box className={classes.instructionBox}>
        <Grid container justify="flex-start" alignItems="center">
          <List aria-label="instructions">
            {instructions.map((instruction) => (
              <ListItem key={instructions.indexOf(instruction)}>
                <ListItemText
                  primary={instruction}
                  secondary={
                    instructions.indexOf(instruction) === 4 ? (
                      <List>
                        {answerInstructions.map((instruction) => (
                          <ListItem key={instructions.indexOf(instruction)}>
                            <ListItemText primary={instruction}></ListItemText>
                          </ListItem>
                        ))}
                      </List>
                    ) : null
                  }
                  primaryTypographyProps={{ color: "inherit" }}
                  secondaryTypographyProps={{ color: "inherit" }}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Box>
    </div>
  );
};

export default UserDashboard;
