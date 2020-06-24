import React, { useState, useEffect } from "react";
import { graphql } from "react-relay";
import { NextPage } from "next";
import { Link } from "@material-ui/core";
import LoginForm from "../components/Login/form";
import useNotification from "../components/Hooks/useNotification";
import { useRouter } from "next/dist/client/router";
import { useMutation } from "relay-hooks";
import { initialValues } from "../components/Login/formValues";
import { loginMutation } from "../__generated__/loginMutation.graphql";
import { formatGraphQLError } from "../components/utils";
import ForgotPasswordDialog from "../components/Login/forgotPasswordDialog";
import FormPage from "../components/FormPage";
import { useCheckLogin } from "../components/Hooks/useCheckLogin";
import LoadingScreen from "../components/loadingScreen";
import CheckLoginError from "../components/checkLoginError";

const mutation = graphql`
    mutation loginMutation($credentials: LoginInput!) {
        login(credentials: $credentials) {
            id
        }
    }
`;

const LoginPage: NextPage = () => {
    const { show } = useNotification();
    const router = useRouter();
    const [commit, { loading }] = useMutation<loginMutation>(mutation, {
        onError: (err) => {
            show(formatGraphQLError(err), { variant: "error" });
        },
    });
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const { error, props } = useCheckLogin();

    useEffect(() => {
        if (props?.isUserLoggedIn.value) router.push("/");
    }, [props?.isUserLoggedIn.value, router]);

    return (
        <>
            {!props && !error && <LoadingScreen />}
            {error && <CheckLoginError error={error} />}
            <FormPage
                title="Megatreopuz - Annual online cryptic hunt"
                submitLabel="Sign in"
                formID="login-form"
                loading={loading}>
                <LoginForm
                    onSubmit={(values: typeof initialValues) => {
                        commit({
                            onCompleted: () => router.push("/"),
                            updater: (store) => store.invalidateStore(),
                            variables: {
                                credentials: {
                                    password: values.password,
                                    username: values.username,
                                },
                            },
                        });
                    }}
                />
                <Link
                    href="#"
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                        e.preventDefault();
                        setShowForgotPassword(true);
                    }}>
                    Forgot your password?
                </Link>
            </FormPage>
            <ForgotPasswordDialog
                handleClose={() => setShowForgotPassword(false)}
                open={showForgotPassword}
            />
        </>
    );
};

export default LoginPage;
