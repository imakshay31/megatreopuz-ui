import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Paper, Divider, SvgIconTypeMap } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import { orange } from '@material-ui/core/colors';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';



interface Props {
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>,
    heading: string,
    data: string,
    unit: string
    caption: string,
    color: string
}

const ImgMediaCard: React.FC<Props> = ({ Icon, heading, data, unit, caption, color }) => {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                // maxWidth: 400,
                // minWidth: 400
                width: "100%"
            },
            iconBg: {
                height: "100px",
                width: "100px",
                position: "relative",
                top: "80px",
                left: "20px",
                backgroundColor: color,
                color: theme.palette.getContrastText(color)

            }, icon: {
                color: theme.palette.getContrastText(color),
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
        }))
    const classes = useStyles();
    const i = <FaceIcon className={classes.icon} />
    return (
        <div>
            <div>
                <Paper className={classes.iconBg}
                    elevation={3}
                    square={true}
                >
                    <Icon className={classes.icon} />
                </Paper>
                <Card className={classes.root} elevation={2}>


                    <CardContent className={classes.main}>
                        <div className={classes.min}>
                            <Typography gutterBottom variant={"body1"} component="h2" color="textSecondary">
                                {heading}
                            </Typography>
                            <Typography gutterBottom variant="h5" component={"data"}>
                                {data}             <Typography gutterBottom variant={"caption"} component={"span"} color="textSecondary">
                                    {unit}
                                </Typography>
                            </Typography>

                        </div>
                        <Divider />
                        <div className={classes.footer}>

                            <Typography gutterBottom variant={"caption"} component={"span"} color="textSecondary">
                                {caption}
                            </Typography>
                        </div>
                    </CardContent>


                </Card>

            </div> </div>
    );
}
export default ImgMediaCard