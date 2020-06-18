import React from "react";
import { AppProps } from "next/app";
import AppWrapper from "../components/App/AppWrapper";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <AppWrapper>
            <Component {...pageProps} />
        </AppWrapper>
    );
};

export default App;
