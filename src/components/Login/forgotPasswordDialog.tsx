import React from "react";
import {
    DialogProps,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    TextField,
    DialogActions,
    Button,
    CircularProgress,
} from "@material-ui/core";
import { useMutation, graphql } from "relay-hooks";
import { Formik, Field, Form, FieldProps } from "formik";
import { object, string } from "yup";
import useNotification from "../Hooks/useNotification";
import { formatGraphQLError } from "../utils";
import { useAppContext } from "../Hooks/useAppContext";

interface Props extends Exclude<DialogProps, "onClose"> {
    handleClose: () => void;
}

const initialValues = {
    email: "",
};

const validationSchema = object().shape({
    email: string().required(`Email is required`).email(`Invalid email format`),
});

const ForgotPasswordDialog: React.FC<Props> = ({ handleClose, ...props }) => {
    const [commit, { loading }] = useMutation(
        graphql`
            mutation forgotPasswordDialogMutation($email: String!) {
                requestPasswordReset(email: $email) {
                    id
                }
            }
        `,
        {
            onError: (err) => {
                show(formatGraphQLError(err), { variant: "error" });
            },
        }
    );

    const { show } = useNotification();
    const { blockingPopup, routeLoading } = useAppContext();

    return (
        <Dialog {...props} onClose={handleClose}>
            <DialogTitle>Reset Password</DialogTitle>
            <DialogContent>
                <DialogContentText variant="body2">
                    Enter the email address that you used to register.
                    We&apos;ll send you an email with instructions to reset your
                    password.
                </DialogContentText>
                <Formik<typeof initialValues>
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        commit({
                            variables: {
                                email: values.email,
                            },
                            onCompleted: () => {
                                show(
                                    `Check your email address for instructions.`
                                );
                                handleClose();
                            },
                        });
                    }}>
                    <Form id="forgot-password-form">
                        <Field name="email">
                            {({
                                field,
                                meta,
                            }: FieldProps<typeof initialValues.email>) => (
                                <TextField
                                    autoFocus
                                    id="email"
                                    label="Email Address"
                                    type="email"
                                    fullWidth
                                    {...field}
                                    error={!!(meta.touched && meta.error)}
                                    helperText={
                                        meta.touched && meta.error
                                            ? meta.error
                                            : " "
                                    }
                                />
                            )}
                        </Field>
                    </Form>
                </Formik>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button
                    disabled={loading || blockingPopup || routeLoading}
                    form="forgot-password-form"
                    type="submit"
                    variant="contained"
                    color="primary">
                    {loading ? (
                        <CircularProgress color="inherit" size={24} />
                    ) : (
                        `Submit`
                    )}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ForgotPasswordDialog;
