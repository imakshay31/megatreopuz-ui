import { NextPage } from "next";
import React from "react";
import FormPage from "../../components/FormPage";
import SignUpLocalForm from "../../components/SignUp/localForm";
import firebase from "firebase/app";

const SignUpPage: NextPage = () => {
    const [loading, setLoading] = React.useState<boolean>(false);
    const onSubmit = async ({
        email,
        password,
    }: {
        email: string;
        password: string;
    }) => {
        setLoading(true);
        try {
            await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };
    return (
        <FormPage
            loading={loading}
            formID="local-sign-up"
            title="Sign up for megatreopuz"
            submitLabel="Sign Up">
            <SignUpLocalForm onSubmit={onSubmit} />
        </FormPage>
    );
};

export default SignUpPage;
