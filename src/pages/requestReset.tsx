import React from "react";
import { NextPage } from "next";
import FormPage from "../components/FormPage";
import RequestResetForm from "../components/RequestReset/form";
import firebase from "firebase/app";

const RequestReset: NextPage = () => {
    const [loading, setLoading] = React.useState<boolean>(false);

    // TODO: Check the state of the user : logged in or out?
    const onSubmit = async ({ email }: { email: string; password: string }) => {
        setLoading(true);
        try {
            await firebase.auth().sendPasswordResetEmail(email);
            console.log("Password reset mail sent");
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };
    return (
        <FormPage
            loading={loading}
            title="Request password reset"
            formID="request-reset-form"
            submitLabel="Request Reset">
            <RequestResetForm onSubmit={onSubmit} />
        </FormPage>
    );
};

export default RequestReset;
