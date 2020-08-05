import React from 'react'
import { ChromePicker } from 'react-color'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, CardHeader, IconButton, Grid, CardActions, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'
const useStyles = makeStyles({
    footer: {
        paddingTop: "16px"
    },
    action: {
        position: "absolute",
        right: "0px",
        marginTop: "20px"
    },
    button: {
        margin: "10px"
    },

    root: {
        width: "32%",
        marginTop: "70px",
        height: "max-content",
        paddingBottom: "35px",
        zIndex: 1,
        minWidth: "300px"
    },
    media: {
        // height: 140,
    },
    grid: {
        flexGrow: 1,
        display: "flex"
    }
});
interface ColorPickerProps {
    valuePrim: string,
    valueSec: string,
    setPrimary: (a: string) => void,
    setSecondary: (a: String) => void
    onClick?: () => void
    reset: () => void,
    onClose: () => void
}

const ColorPicker: React.FC<ColorPickerProps> = ({
    valuePrim,
    onClick,
    setPrimary, valueSec, setSecondary, reset, onClose
}) => {
    const classes = useStyles()
    const [primaryColor, setPrimaryColor] = React.useState(valuePrim)
    const [secondyColor, setSecondaryColor] = React.useState(valueSec)


    return (
        <Card className={classes.root}>
            <CardHeader

                action={
                    <IconButton aria-label="cancel" onClick={() => onClose()}>
                        <CloseIcon />
                    </IconButton>
                }
                title="Choose colors your app yourself"
                subheader="Define color of app yourself"
                titleTypographyProps={{ variant: "body1" }}
                subheaderTypographyProps={{ variant: "caption" }}
            />
            <CardContent>
                <div className={classes.grid}>
                    <Grid container spacing={4}>
                        <Grid item lg={6} >
                            <div
                                onClick={onClick}
                            >
                                <ChromePicker
                                    color={primaryColor}
                                    onChange={(a) => setPrimaryColor(a)}
                                />
                            </div>
                            <div className={classes.footer}><Typography align={"center"}>Primary Color</Typography></div>
                        </Grid>
                        <Grid item lg={6} >
                            <div
                                onClick={onClick}
                            >
                                <ChromePicker
                                    color={secondyColor}
                                    onChange={(a: any) => setSecondaryColor(a)}
                                />
                            </div>
                            <div className={classes.footer}> <Typography align={"center"}>Secondary Color</Typography></div>
                        </Grid>
                    </Grid>
                </div>
            </CardContent>
            <CardActions>
                <div className={classes.action}>
                    <Button variant="outlined" color="primary" className={classes.button} onClick={() => reset()} >
                        Reset
                    </Button>
                    <Button variant="contained" color="primary" className={classes.button} onClick={() => {
                        setPrimary(primaryColor)
                        setSecondary(secondyColor)
                    }} >
                        Apply
                     </Button>

                </div>
            </CardActions>
        </Card>



    )
}


export default ColorPicker
