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

    const onGoogleSignIn = () => {
        setLoading(true);

        var provider = new firebase.auth.GoogleAuthProvider();
        console.log(provider)
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential;
            console.log(token)
            // The signed-in user info.
            var user = result.user;
            console.log(user)
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        }).finally(() => { setLoading(false) })



    }
    return (
        <FormPage
            loading={loading}
            formID="local-sign-up"
            title="Sign up for megatreopuz"
            submitLabel="Sign Up"
            googleButton={true}
            googleTitle="Sign Up with google"
            googleExec={onGoogleSignIn}
        >
            <SignUpLocalForm onSubmit={onSubmit} />
        </FormPage>
    );
};

export default SignUpPage;
