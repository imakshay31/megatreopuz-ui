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
import CustomDrawer from '../../components/UserDashBoard/CustomDrawer';
import query from '../../components/Relay/queries/GetQuestionQuery';
import { GetQuestionQuery } from "../../__generated__/GetQuestionQuery.graphql"
import { useQuery, useRelayEnvironment } from 'relay-hooks';
import AnswerQuestionMutation from "../../components/Relay/mutations/AnswerQuestionMutation"
import { AnswerQuestionInput } from '../../__generated__/AnswerQuestionMutation.graphql';
import LoadingScreen from '../../components/App/QueryLoaderScreen';

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
        width: '70%',
        borderRadius: theme.spacing(1 / 2)
        // border: `1px solid black`,
    },
    nullText: {
        marginLeft: "auto",
        marginRight: "auto",
        width: "80%",
        lineHeight: "200px"
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
    img: {
        borderRadius: theme.spacing(1)
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
    const [helperText, setHelperText] = React.useState("")
    const [fail, SetFail] = React.useState(false)
    const env = useRelayEnvironment();
    const [next, setNext] = React.useState(true)

    const { data, error, retry, isLoading } = useQuery<GetQuestionQuery>(query)


    const classes = useStyles()
    const handleClose = () => {

    };

    React.useEffect(() => {
        setHelperText("")
        SetFail(false)
    }, [localState])

    const handleNext = () => {
        setNext(true)
        retry()
        setHelperText("")
    }

    const handleSuccess = () => {
        setHelperText("Correct Answer, Click on Next to view next question")
        setNext(false)
    }
    const handleError = () => {

        SetFail(true)
        setHelperText("Wrong Answer! try something else")
    }

    const handleSubmit = () => {
        setHelperText("Checking ....")
        const answerInfo: AnswerQuestionInput = {
            answer: localState,

            questionNo: data.getQuestion.questionNo,
            id: viewer.id
        } as any
        AnswerQuestionMutation(env, answerInfo, { onCompleted: handleSuccess, onError: handleError })
    }


    return (
        <div>
            <CustomDrawer
                name={viewer.name}
                username={viewer.userName}
                page={"Contest"}
            />
            {Boolean(data) || isLoading ? <Grid container justify="center" alignItems="center" className={classes.root}>
                <Paper elevation={6} className={classes.box}>
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                        Question {isLoading ? "" : data.getQuestion.questionNo}
                    </DialogTitle>
                    <DialogContent >
                        <Typography className={classes.noSelect} gutterBottom>

                        </Typography>

                        {isLoading ? <><LoadingScreen loading={isLoading} /></> : <Box m={4} className={classes.imageBox}>
                            <Paper elevation={0}>
                                <Box>
                                    <Image
                                        layout={'responsive'}
                                        height={100}
                                        width={300}
                                        src={"/2.jpg"}
                                        className={classes.img}

                                    />
                                </Box>
                            </Paper>
                        </Box>}
                        {isLoading ? <></> : <Box ml={4} mr={4}>
                            <TextField
                                fullWidth
                                multiline
                                label={"Answer"}
                                onChange={(e) => {
                                    setLocalState(e.target.value);
                                }}
                                helperText={helperText}
                                error={fail}
                                value={localState}

                            />
                        </Box>}

                    </DialogContent>
                    <DialogActions >
                        <Button variant="contained" size="large" color="primary" disabled={next} onClick={handleNext}>Next</Button>
                        <Button variant="contained" size="large" color="primary" disabled={!next} onClick={handleSubmit}>Submit</Button>
                    </DialogActions>
                </Paper>
            </Grid> : <Box mt={20} className={classes.nullText}><Typography variant="h3" align="center">
                That's All for now. Stay tuned for next questions. we will be back soon
            </Typography></Box>
            }

        </div>
    );
}


export default QuestionComponent