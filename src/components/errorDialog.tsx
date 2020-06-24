import React, { useEffect } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    Typography,
} from "@material-ui/core";
import { useBlurMain } from "./Hooks/useBlurMain";

const ErrorDialog: React.FC<{ message: React.ReactNode }> = ({ message }) => {
    const blur = useBlurMain();

    useEffect(() => {
        blur(true);
        return () => blur(false);
    });

    return (
        <Dialog open={true}>
            <DialogTitle disableTypography>
                <Typography color="error" variant="h5" component="h3">
                    Fatal Error
                </Typography>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>{message}</DialogContentText>
            </DialogContent>
        </Dialog>
    );
};

export default ErrorDialog;
