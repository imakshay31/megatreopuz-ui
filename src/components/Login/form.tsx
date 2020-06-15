import React, { useState, useEffect } from "react";
import "formik";
import { Formik, Form, Field, FieldProps, FormikHelpers } from "formik";
import { initialValues, schema } from "./formValues";
import { TextField } from "@material-ui/core";

interface Props {
    onSubmit: (
        values: typeof initialValues,
        helpers: FormikHelpers<typeof initialValues>
    ) => void;
}

const Username: React.FC = () => {
    const [shrink, setShrink] = useState(false);
    useEffect(() => {
        setTimeout(() => setShrink(true), 300);
    });
    return (
        <Field name="username">
            {({
                field,
                meta,
            }: FieldProps<typeof initialValues["username"]>) => (
                <TextField
                    disabled={!shrink}
                    id="username"
                    InputLabelProps={{ shrink }}
                    margin="dense"
                    label="Username"
                    fullWidth
                    variant="outlined"
                    error={!!(meta.touched && meta.error)}
                    {...field}
                    helperText={meta.touched && meta.error ? meta.error : " "}
                />
            )}
        </Field>
    );
};

const Password: React.FC = () => {
    const [shrink, setShrink] = useState(false);
    useEffect(() => {
        setTimeout(() => setShrink(true), 300);
    });
    return (
        <Field name="password">
            {({
                field,
                meta,
            }: FieldProps<typeof initialValues["password"]>) => (
                <TextField
                    disabled={!shrink}
                    id="password"
                    InputLabelProps={{ shrink }}
                    margin="dense"
                    label="Password"
                    fullWidth
                    type="password"
                    variant="outlined"
                    error={!!(meta.touched && meta.error)}
                    {...field}
                    helperText={meta.touched && meta.error ? meta.error : " "}
                />
            )}
        </Field>
    );
};

const LoginForm: React.FC<Props> = ({ onSubmit }) => {
    return (
        <Formik<typeof initialValues>
            onSubmit={onSubmit}
            initialValues={initialValues}
            validationSchema={schema}>
            <Form id="login-form">
                <Username />
                <Password />
            </Form>
        </Formik>
    );
};

export default LoginForm;
