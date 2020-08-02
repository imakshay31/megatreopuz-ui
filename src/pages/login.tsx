import React from "react";
import { NextPage } from "next";
import FormPage from "../components/FormPage";
import LoginForm from "../components/Login/form";
import firebase from "firebase/app";
import { graphql, useMutation } from "relay-hooks";
import { loginMutation } from "../__generated__/loginMutation.graphql";
import { useRouter } from "next/dist/client/router";

const mutation = graphql`
    mutation loginMutation($idToken: String!) {
        createUserSession(idToken: $idToken) {
            initialised
        }
    }
`;

const Login: NextPage = () => {
    const [loading, setLoading] = React.useState<boolean>(false);
    const [mutate] = useMutation<loginMutation>(mutation);
    const router = useRouter();
    const onSubmit = async ({
        email,
        password,
    }: {
        email: string;
        password: string;
    }) => {
        setLoading(true);
        try {
            const result = await firebase
                .auth()
                .signInWithEmailAndPassword(email, password);
            const mutationResult = await mutate({
                variables: {
                    idToken: await result.user.getIdToken(),
                },
            });

            if (mutationResult.createUserSession.initialised)
                router.push("/dashboard");
            else router.push("/signUp/completeDetails");
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };
    return (
        <FormPage
            loading={loading}
            title="Log in to megatreopuz"
            formID="login-form"
            submitLabel="Login">
            <LoginForm onSubmit={onSubmit} />
        </FormPage>
    );
};

export default Login;
