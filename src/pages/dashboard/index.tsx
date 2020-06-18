import { NextPage } from "next";
import React from "react";
import { Button, CircularProgress } from "@material-ui/core";
import useNotification from "../../components/Hooks/useNotification";
import { useRouter } from "next/router";
import { graphql } from "relay-runtime";
import { dashboardLogoutMutation } from "../../__generated__/dashboardLogoutMutation.graphql";
import { useMutation } from "react-relay/hooks";

const mutation = graphql`
    mutation dashboardLogoutMutation {
        logout {
            sucessful
        }
    }
`;

const Dashboard: NextPage = () => {
    const router = useRouter();
    const { show } = useNotification();
    const [commit, loading] = useMutation<dashboardLogoutMutation>(mutation);

    return (
        <Button
            onClick={() => {
                commit({
                    variables: {},
                    onCompleted: () => {
                        router.push("/");
                    },
                    onError: (err: any) => {
                        show(
                            err.source?.errors[0]?.message ?? "Unknown error",
                            {
                                variant: "error",
                            }
                        );
                    },
                });
            }}>
            {loading ? <CircularProgress /> : `Click me`}
        </Button>
    );
};

export default Dashboard;
