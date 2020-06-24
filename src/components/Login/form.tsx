import React, { useState, useEffect } from "react";
import "formik";
import { Formik, Form, Field, FieldProps } from "formik";
import { initialValues, schema } from "./formValues";
import { TextField } from "@material-ui/core";
import PasswordInput from "../passwordInput";

interface Props {
    onSubmit: (values: typeof initialValues) => void | Promise<void>;
}

const Username: React.FC = () => {
    const [shrink, setShrink] = useState(false);
    useEffect(() => {
        setTimeout(() => setShrink(true));
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
                    label="Username"
                    fullWidth
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
        setTimeout(() => setShrink(true));
    });
    return (
        <Field name="password">
            {({
                field,
                meta,
            }: FieldProps<typeof initialValues["password"]>) => {
                const error = meta.touched && meta.error ? meta.error : " ";
                const hasError = !!(meta.touched && meta.error);
                return (
                    <PasswordInput
                        showToggle
                        fullWidth
                        disabled={!shrink}
                        InputLabelProps={{
                            shrink,
                        }}
                        id="password"
                        {...field}
                        label="Password"
                        error={hasError}
                        helperText={error}
                    />
                );
            }}
        </Field>
    );
};

const LoginForm: React.FC<Props> = ({ onSubmit }) => {
    return (
        <>
            <Formik<typeof initialValues>
                onSubmit={async (values, helpers) => {
                    await onSubmit(values);
                    helpers.setSubmitting(false);
                }}
                initialValues={initialValues}
                validationSchema={schema}>
                <Form id="login-form">
                    <Username />
                    <Password />
                </Form>
            </Formik>
        </>
    );
};

export default LoginForm;
