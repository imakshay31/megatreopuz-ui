import React from "react";
import App, { AppProps } from "next/app";
import { RelayEnvironmentProvider } from "relay-hooks";
import getEnvironment from "../components/relay/getEnvironment";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";

interface ExtraAppProps {
    records?: RecordMap;
}

function CustomApp(props: AppProps & ExtraAppProps): React.ReactElement {
    const { Component, pageProps, records: r } = props;

    const records: RecordMap = React.useMemo(() => {
        if (r) return r;
        if (typeof document !== "undefined") {
            return JSON.parse(document.getElementById("relay-data").innerHTML);
        }
        return {};
    }, [r]);
    const env = React.useRef(getEnvironment().createEnvironment(records));

    return (
        <RelayEnvironmentProvider environment={env.current}>
            <Component {...pageProps} />
        </RelayEnvironmentProvider>
    );
}

const getInitialProps: typeof App.getInitialProps = (props) => {
    return App.getInitialProps(props);
};

CustomApp.getInitialProps = getInitialProps;

export default CustomApp;
