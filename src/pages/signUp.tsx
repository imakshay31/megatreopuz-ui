import { NextPage } from "next";
import React, { useState } from "react";
import PasswordInput from "../components/passwordInput";
import FormPage from "../components/FormPage";

const SignUpPage: NextPage = () => {
    const [password, setPassword] = useState<string>("");
    return (
        <FormPage
            loading={false}
            formID="lreom"
            title="Sign up"
            submitLabel="Sign Up">
            <PasswordInput
                id="fsdafl"
                label="Password"
                showToggle
                fullWidth
                helperText="Lorem Ipsum"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </FormPage>
    );
};

export default SignUpPage;
