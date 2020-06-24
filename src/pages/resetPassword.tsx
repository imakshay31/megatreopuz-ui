import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import FormPage from "../components/FormPage";
import { object, string, ref } from "yup";
import { Formik, Form, Field, FieldProps } from "formik";
import PasswordInput from "../components/passwordInput";
import { graphql, useMutation } from "relay-hooks";
import { resetPasswordMutation } from "../__generated__/resetPasswordMutation.graphql";
import useNotification from "../components/Hooks/useNotification";
import { formatGraphQLError } from "../components/utils";
import { useRouter } from "next/router";

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

const mutation = graphql`
    mutation resetPasswordMutation($code: String!, $newPassword: String!) {
        updatePassword(code: $code, newPassword: $newPassword) {
            id
        }
    }
`;

const ResetPasswordPage: NextPage = () => {
    const [shrink, setShrink] = useState(false);
    useEffect(() => {
        setTimeout(() => setShrink(true));
    });
    const { show } = useNotification();
    const [commit, { loading }] = useMutation<resetPasswordMutation>(mutation, {
        onError: (err) => show(formatGraphQLError(err), { variant: "error" }),
    });
    const { query, ...router } = useRouter();
    return (
        <FormPage
            loading={loading}
            formID="reset-password-form"
            submitLabel="Reset Password"
            title="Reset your Megatreopuz password">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    commit({
                        variables: {
                            newPassword: values.password,
                            code: (query.code as string) ?? "",
                        },
                        onCompleted: () => {
                            show(
                                `Password reset successfully. Redirecting to login page`
                            ),
                                router.push("/login");
                        },
                    });
                }}>
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
