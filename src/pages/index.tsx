import { NextPage } from "next";
import React, { useEffect } from "react";
import { Button, CircularProgress } from "@material-ui/core";
import useNotification from "../components/Hooks/useNotification";
import { useRouter } from "next/router";
import { graphql } from "relay-runtime";
import { pagesLogoutMutation } from "../__generated__/pagesLogoutMutation.graphql";
import { formatGraphQLError } from "../components/utils";
import { useMutation } from "relay-hooks";
import { useCheckLogin } from "../components/Hooks/useCheckLogin";
import LoadingScreen from "../components/loadingScreen";
import CheckLoginError from "../components/checkLoginError";

const mutation = graphql`
    mutation pagesLogoutMutation {
        logout {
            id
        }
    }
`;

const Dashboard: NextPage = () => {
    const { show } = useNotification();
    const router = useRouter();
    const [commit, { loading }] = useMutation<pagesLogoutMutation>(mutation, {
        onError: (err) => {
            show(formatGraphQLError(err), { variant: "error" });
        },
        onCompleted: () => router.push("/"),
        updater: (store) => store.invalidateStore(),
    });
    const { error, props } = useCheckLogin();

    useEffect(() => {
        if (props?.isUserLoggedIn.value === false) router.push("/login");
    }, [props?.isUserLoggedIn.value, router]);

    return (
        <>
            {!props && !error && <LoadingScreen />}
            {error && <CheckLoginError error={error} />}
            <Button
                onClick={() =>
                    commit({
                        variables: {},
                        onCompleted: () => router.push("/login"),
                    })
                }>
                {loading ? <CircularProgress /> : `Logout`}
            </Button>
        </>
    );
};

export default Dashboard;
