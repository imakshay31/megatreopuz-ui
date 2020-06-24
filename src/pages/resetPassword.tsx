import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import FormPage from "../components/FormPage";
import { object, string, ref } from "yup";
import { Formik, Form, Field, FieldProps } from "formik";
import PasswordInput from "../components/passwordInput";
import { graphql } from "relay-hooks";

const initialValues = {
    password: "",
    reEnterPassword: "",
};

// TODO: Add password restrictions
const validationSchema = object().shape({
    password: string().required(`Password is required`),
    reEnterPassword: string()
        .equals([ref("password")], `Passwords do not match`)
        .required(`Confirm your password`),
});

const ResetPasswordPage: NextPage = () => {
    const [shrink, setShrink] = useState(false);
    useEffect(() => {
        setTimeout(() => setShrink(true));
    });
    return (
        <FormPage
            formID="reset-password-form"
            submitLabel="Reset Password"
            title="Reset your megatreopuz password">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={console.log}>
                <Form id="reset-password-form">
                    <Field name="password">
                        {({
                            field,
                            meta,
                        }: FieldProps<
                            typeof initialValues.password,
                            typeof initialValues
                        >) => (
                            <PasswordInput
                                InputLabelProps={{ shrink }}
                                label="New password"
                                fullWidth
                                error={!!(meta.touched && meta.error)}
                                helperText={
                                    meta.touched && meta.error
                                        ? meta.error
                                        : " "
                                }
                                {...field}
                            />
                        )}
                    </Field>
                    <Field name="reEnterPassword">
                        {({
                            field,
                            meta,
                        }: FieldProps<
                            typeof initialValues.password,
                            typeof initialValues
                        >) => (
                            <PasswordInput
                                InputLabelProps={{ shrink }}
                                label="Confirm password"
                                fullWidth
                                error={!!(meta.touched && meta.error)}
                                helperText={
                                    meta.touched && meta.error
                                        ? meta.error
                                        : " "
                                }
                                {...field}
                            />
                        )}
                    </Field>
                </Form>
            </Formik>
        </FormPage>
    );
};

export default ResetPasswordPage;
