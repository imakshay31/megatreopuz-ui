import React from 'react';
import { createStyles, Theme, withStyles, WithStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Image from 'next/image'
import Typography from '@material-ui/core/Typography';
import { Box, Grid, TextField, Tooltip, Paper, Card, CardActionArea, CardMedia } from '@material-ui/core';
import { NextPage } from 'next';
import { ProtectedPageProps } from '../_app';

const styles = (theme: Theme) =>
    createStyles({
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    });


const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        minHeight: '100vh',
    },
    box: {
        width: '80%',
        border: `3px solid ${theme.palette.divider}`,
    },
    dialogActions: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    nextBtn: {
        // marginRight: 'auto',
        [theme.breakpoints.down('lg')]: {
            margin: theme.spacing(1),
        },
    },
    reviewBtn: {
        [theme.breakpoints.down('md')]: {
            margin: theme.spacing(1),
        },
    },
    noSelect: {
        userSelect: 'none',
    },
    imageBox: {
        borderStyle: "solid",
        borderWidth: theme.spacing(1 / 8),
        borderRadius: theme.spacing(1 / 4),
        borderColor: theme.palette.divider,
        padding: theme.spacing(2)

    },

    media: {
        height: 200,
    }
}));


export interface DialogTitleProps extends WithStyles<typeof styles> {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>

        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);



const QuestionComponent: NextPage<ProtectedPageProps> = ({
    viewer
}) => {


    const [localState, setLocalState] = React.useState("")
    const [localState2, setLocalState2] = React.useState("")



    const classes = useStyles()
    const handleClose = () => {

    };


















    return (
        <div>
            <Grid container justify="center" alignItems="center" className={classes.root}>
                <Box className={classes.box}>
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                        Question 1
          </DialogTitle>
                    <DialogContent dividers>
                        <Typography className={classes.noSelect} gutterBottom>

                        </Typography>

                        <Box m={4} className={classes.imageBox}>
                            <Paper elevation={0}>
                                <Box>
                                    <Image
                                        layout={'responsive'}
                                        height={100}
                                        width={300}
                                        src={"/2.jpg"}
                                    />
                                </Box>
                            </Paper>
                        </Box>


                        <Box>
                            <TextField
                                fullWidth
                                multiline
                                label={"Answer"}
                                onChange={(e) => {
                                    setLocalState(e.target.value);
                                }}
                                value={localState}

                            />
                        </Box>

                    </DialogContent>
                    <DialogActions className={classes.dialogActions}>
                        <Button variant="contained" color="primary">Submit</Button>
                        <Button variant="contained">Next</Button>
                    </DialogActions>
                </Box>
            </Grid>
        </div>
    );
}


export default QuestionComponent