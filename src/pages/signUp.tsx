import { NextPage } from "next";
import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import PasswordInput from "../components/passwordInput";
import firebase from "../components/Firebase";
import FormPage from "../components/FormPage";

function createUser(email: string, password: string): void {
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(function (error) {
            console.log(error);
        });
}

const LoginPage: NextPage = () => {
    const [email, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    return (
        <FormPage
            loading={false}
            formID="lreom"
            title="Sign up"
            submitLabel="Sign Up">
            <TextField
                value={email}
                onChange={(e) => setUsername(e.target.value)}
            />
            <PasswordInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={() => createUser(email, password)}>Sign Up</Button>
        </FormPage>
    );
};

export default LoginPage;
