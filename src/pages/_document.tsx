import React, { ReactElement, ComponentType } from "react";
import Document, {
    DocumentContext,
    DocumentInitialProps,
    Html,
    Head,
    Main,
    NextScript,
} from "next/document";
import { AppType } from "next/dist/next-server/lib/utils";
import { ServerStyleSheets } from "@material-ui/core";
import getInitialEnvironment from "../components/relay/initialEnvironment";
import { RelayEnvironmentProvider } from "relay-hooks";
import cookie from "cookie";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";
import AppWrapper from "../components/App/AppWrapper";
interface ExtraProps {
    records: RecordMap;
}

class MyDocument extends Document<ExtraProps> {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps & ExtraProps> {
        const originalRenderPage = ctx.renderPage;

        // Relay cookies between backend and client using headers
        const parsedCookie = cookie.parse(ctx.req.headers.cookie ?? "");
        const headers: Record<string, string> = {};

        "accessToken" in parsedCookie &&
            (headers.accessToken = parsedCookie.accessToken);
        "refreshToken" in parsedCookie &&
            (headers.refreshToken = parsedCookie.refreshToken);

        const clientHeaders = {};
        const serverEnv = getInitialEnvironment(headers, clientHeaders);
        ctx.renderPage = () =>
            originalRenderPage({
                enhanceComponent: (Component: ComponentType) => (props) => {
                    // Prepare the relay store
                    return (
                        <RelayEnvironmentProvider
                            environment={serverEnv.environment}>
                            <AppWrapper>
                                <Component {...props} />
                            </AppWrapper>
                        </RelayEnvironmentProvider>
                    );
                },
            });

        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        await Document.getInitialProps(ctx);
        await serverEnv.relayServerSSR.getCache();
        const records: RecordMap = serverEnv.environment
            .getStore()
            .getSource()
            .toJSON();
        for (const header in clientHeaders)
            ctx.res?.setHeader(header, clientHeaders[header]);

        const sheets = new ServerStyleSheets();
        ctx.renderPage = () =>
            originalRenderPage({
                // useful for wrapping the whole react tree
                enhanceApp: (App: AppType) => (props) => {
                    return sheets.collect(
                        <App
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            records={records}
                            {...props}
                        />
                    );
                },
            });
        const initialProps = await Document.getInitialProps(ctx);

        return {
            ...initialProps,
            styles: [
                ...React.Children.toArray(initialProps.styles),
                sheets.getStyleElement(),
            ],
            records,
        };
    }

    render(): ReactElement {
        return (
            <Html>
                <Head />
                <body>
                    <template id="relay-data">
                        {Buffer.from(
                            JSON.stringify(this.props.records)
                        ).toString("base64")}
                    </template>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
