import React from "react";
import { NextPage } from "next";
import { useQuery, graphql } from "relay-hooks";
import { pagesQuery } from "../__generated__/pagesQuery.graphql";

const IndexPage: NextPage = () => {
    const { error, props } = useQuery<pagesQuery>(
        graphql`
            query pagesQuery {
                dummyQuery
            }
        `,
        {}
    );

    if (error) return <h1>{error.message}</h1>;
    if (!props) return <h1>Loading</h1>;
    return <h1>{props.dummyQuery}</h1>;
};

export default IndexPage;
