import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Paper, Divider } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import { orange } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 400,
            minWidth: 400
        },
        iconBg: {
            height: "100px",
            width: "100px",
            position: "relative",
            top: "80px",
            left: "20px",
            backgroundColor: orange[600],
            color: theme.palette.getContrastText(orange[600])

        }, icon: {
            color: theme.palette.getContrastText(orange[600]),
            fontSize: "80px",
            marginLeft: "10px",
            marginTop: "5px"

        },
        main: {
            float: "right",
            textAlign: "right"
        },
        min: {
            padding: "10px"
        },
        footer: {
            paddingTop: "10px"
        }
    }));

export default function ImgMediaCard() {
    const classes = useStyles();

    return (
        <div style={{ position: "absolute" }}>
            <Paper className={classes.iconBg}
                elevation={3}
                square={true}
            >
                <FaceIcon className={classes.icon} />
            </Paper>
            <Card className={classes.root} elevation={2}>
                <CardActionArea>

                    <CardContent className={classes.main}>
                        <div className={classes.min}>
                            <Typography gutterBottom variant={"body1"} component="h2" color="textSecondary">
                                Rank
          </Typography>
                            <Typography gutterBottom variant="h5" component={"data"}>
                                2/400               <Typography gutterBottom variant={"caption"} component={"span"} color="textSecondary">
                                    position
</Typography>
                            </Typography>

                        </div>
                        <Divider />
                        <div className={classes.footer}>

                            <Typography gutterBottom variant={"caption"} component={"span"} color="textSecondary">
                                Shows you, your real time rank in contest
</Typography>
                        </div>
                    </CardContent>
                </CardActionArea>

            </Card>
        </div>
    );
}