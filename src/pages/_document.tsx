import React, { ReactElement } from "react";
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
import ReactDOMServer from "react-dom/server";
import getInitialEnvironment from "../components/relay/initialEnvironment";
import { RelayEnvironmentProvider } from "relay-hooks";
import cookie from "cookie";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";

interface ExtraProps {
    records: RecordMap;
}

class MyDocument extends Document<ExtraProps> {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps & ExtraProps> {
        const parsedCookie = cookie.parse(ctx.req.headers.cookie);
        const headers: Record<string, string> = {};

        "accessToken" in parsedCookie &&
            (headers.accessToken = parsedCookie.accessToken);
        "refreshToken" in parsedCookie &&
            (headers.refreshToken = parsedCookie.refreshToken);

        const originalRenderPage = ctx.renderPage;
        const serverEnv = getInitialEnvironment(headers);
        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: () => (props) => {
                    // Prepare the relay store
                    ReactDOMServer.renderToString(
                        <RelayEnvironmentProvider
                            environment={serverEnv.environment}>
                            <props.Component {...props.pageProps} />
                        </RelayEnvironmentProvider>
                    );

                    return null;
                },
            });

        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        await Document.getInitialProps(ctx);
        await serverEnv.relayServerSSR.getCache();

        const sheets = new ServerStyleSheets();
        ctx.renderPage = () =>
            originalRenderPage({
                // useful for wrapping the whole react tree
                enhanceApp: (App: AppType) => (props) => {
                    return sheets.collect(
                        <App
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            records={serverEnv.environment
                                .getStore()
                                .getSource()
                                .toJSON()}
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
            records: serverEnv.environment.getStore().getSource().toJSON(),
        };
    }

    render(): ReactElement {
        return (
            <Html>
                <Head />
                <body>
                    <template id="relay-data">
                        {JSON.stringify(this.props.records)}
                    </template>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
