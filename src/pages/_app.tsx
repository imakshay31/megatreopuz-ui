import React from "react";
import App, { AppProps } from "next/app";
import { RelayEnvironmentProvider } from "relay-hooks";
import getEnvironment from "../components/relay/getEnvironment";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";
import AppWrapper from "../components/App/AppWrapper";

interface ExtraAppProps {
    records?: RecordMap;
}

function CustomApp(props: AppProps & ExtraAppProps): React.ReactElement {
    const { Component, pageProps, records: r } = props;
    const records: RecordMap = React.useMemo(() => {
        if (r) return r;
        if (typeof document !== "undefined") {
            const recordsData = (document.getElementById(
                "relay-data"
            ) as HTMLTemplateElement)?.content?.textContent;
            if (recordsData)
                return JSON.parse(
                    Buffer.from(recordsData, "base64").toString()
                );
        }
        return {};
    }, [r]);

    const env = React.useRef(getEnvironment().createEnvironment(records));

    return (
        <RelayEnvironmentProvider environment={env.current}>
            <AppWrapper>
                <Component {...pageProps} />
            </AppWrapper>
        </RelayEnvironmentProvider>
    );
}

const getInitialProps: typeof App.getInitialProps = (props) => {
    // To disable static rendering of pages
    // As each request is possibly from different user
    return App.getInitialProps(props);
};

CustomApp.getInitialProps = getInitialProps;

export default CustomApp;
