import React from "react";
import { Form, FormikFormProps, Formik, Field, FieldProps } from "formik";
import * as yup from "yup";
import Username, { UsernameProps } from "./username";
import { ResolvablePromise } from "../resolvablePromise";

const initialValues = {
    username: "",
};

interface Props {
    formProps?: FormikFormProps;
    onSubmit: (values: typeof initialValues) => void | Promise<void>;
    usernameCheck: (
        username: string
    ) => ResolvablePromise<{ available: boolean; username: string }>;
}

const validationSchema = yup.object({
    username: yup.string().required("Username cannot be empty"),
});

const SignUpForm: React.FC<Props> = ({
    formProps,
    onSubmit,
    usernameCheck,
}) => {
    const [usernameState, setUsernameState] = React.useState<
        UsernameProps["state"]
    >("null");
    const currentPromise = React.useRef<null | ResolvablePromise<{
        available: boolean;
        username: string;
    }>>(null);

    const currentUsername = React.useRef<string>("");

    const validateUsername: (
        value: string
    ) => Promise<string | undefined> = React.useMemo(() => {
        return async (username: string) => {
            // Explicitly return undefined to make things more clear

            if (currentUsername.current === username) {
                // Do nothing. Simply do nothing
                // Handles the case when blur event occurs
                return undefined;
            }

            // We will never return an error message.
            // Error messages are a part of the username component.
            // We simply nudge the username component with state here
            // This is because username component has 4 states. So it makes more
            // Sense to keep the stateful logic there and control it from here

            // Current username is different than the previous one
            currentUsername.current = username;
            currentPromise.current?.resolve({
                available: true,
                // A promise is never made for null values
                // So if a promise is resolved for empty username
                // We will know that it was resolved externally
                username: "",
            });

            if (!username) {
                setUsernameState("null");
                return undefined;
            }

            setUsernameState("loading");
            currentPromise.current = usernameCheck(username);
            // Wait for the query to be resolved
            const { available, username: oldUsername } = await currentPromise
                .current.promise;
            // Promise might be resolved naturally or forcefully
            // Check the value to see

            if (!oldUsername) return undefined;
            setUsernameState(available ? "valid" : "unavailable");
            return undefined;
        };
    }, [usernameCheck]);

    return (
        <Formik
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            initialValues={initialValues}>
            <Form aria-label="Sign up form" {...formProps}>
                <Field name="username" validate={validateUsername}>
                    {({
                        field,
                        meta,
                    }: FieldProps<typeof initialValues["username"]>) => (
                        <Username
                            fullWidth
                            error={!!(meta.touched && meta.error)}
                            helperText={meta.touched && meta.error}
                            state={usernameState}
                            {...field}
                        />
                    )}
                </Field>
            </Form>
        </Formik>
    );
};

const defaultProps = {
    formProps: {},
};
SignUpForm.defaultProps = defaultProps;
export default SignUpForm;
