import React from "react";
import { AppProps } from "next/app";
import AppWrapper from "../components/App/AppWrapper";

function CustomApp(props: AppProps): React.ReactElement {
    const { Component, pageProps } = props;

    return (
        <AppWrapper>
            <Component {...pageProps} />
        </AppWrapper>
    );
}

export default CustomApp;
