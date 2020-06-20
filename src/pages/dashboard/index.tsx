import { NextPage, GetServerSideProps } from "next";
import React from "react";
import { Button, CircularProgress } from "@material-ui/core";
import useNotification from "../../components/Hooks/useNotification";
import { useRouter } from "next/router";
import { graphql } from "relay-runtime";
import { dashboardLogoutMutation } from "../../__generated__/dashboardLogoutMutation.graphql";

const mutation = graphql`
    mutation dashboardLogoutMutation {
        logout {
            sucessful
        }
    }
`;

const dashboardQueryConst = graphql`
    query dashboardQuery {
        dummyQuery
    }
`;

const Dashboard: NextPage = () => {
    const router = useRouter();
    const { show } = useNotification();

    return (
        <>
            <Button
                onClick={() => {
                    // commit({
                    //     variables: {},
                    //     onCompleted: () => {
                    //         router.push("/");
                    //     },
                    //     onError: (err: any) => {
                    //         show(
                    //             err.source?.errors[0]?.message ??
                    //                 "Unknown error",
                    //             {
                    //                 variant: "error",
                    //             }
                    //         );
                    //     },
                    // });
                }}>
                {/* {loading ? <CircularProgress /> : `Click me`} */}
            </Button>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    return { props: { lorem: "ipsum" } };
};

export default Dashboard;
