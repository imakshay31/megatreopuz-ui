import React from "react";
import ErrorDialog from "./errorDialog";
import { formatGraphQLError } from "./utils";

const CheckLoginError: React.FC<{ error: Error }> = ({ error }) => {
    return (
        <ErrorDialog
            message={
                <>
                    Something went wrong while validating your login session.
                    Please try again later.
                    <br />
                    <br />
                    Error: {formatGraphQLError(error)}
                </>
            }
        />
    );
};

export default CheckLoginError;
