import { NextPage } from "next";
import React from "react";
import FormPage from "../../components/FormPage";
import SignUpForm from "../../components/SignUp/form";
import { makeResolvable } from "../../components/resolvablePromise";

const p = (username: string) =>
    makeResolvable<{ available: boolean; username: string }>((resolve) =>
        setTimeout(
            () => resolve({ available: username !== "yash", username }),
            username !== "yash" ? 2000 : 5000
        )
    );

const SignUpPage: NextPage = () => {
    return (
        <FormPage
            loading={false}
            formID="lreom"
            title="Sign up"
            submitLabel="Sign Up">
            <SignUpForm usernameCheck={p} onSubmit={console.log} />
        </FormPage>
    );
};

export default SignUpPage;
