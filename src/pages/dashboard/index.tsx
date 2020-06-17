import { NextPage } from "next";
import React from "react";
import { Button, CircularProgress } from "@material-ui/core";
import { CommonPageProps } from "../../components/types";
import useNotification from "../../components/useNotification";
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

const Dashboard: NextPage<CommonPageProps> = () => {
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
