import { Environment, RecordSource, Store } from "relay-runtime";
import RelayServerSSR from "react-relay-network-modern-ssr/lib/server";
import { RelayNetworkLayer, urlMiddleware } from "react-relay-network-modern";

export interface InitialEnvironment {
    environment: Environment;
    relayServerSSR: RelayServerSSR;
}

const getInitialEnvironment = (
    headers: Record<string, string>
): InitialEnvironment => {
    const relayServerSSR = new RelayServerSSR();
    const source = new RecordSource();
    const store = new Store(source);

    const network = new RelayNetworkLayer([
        relayServerSSR.getMiddleware(),
        urlMiddleware({
            url: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
            headers: headers,
        }),
    ]);

    const environment = new Environment({ network, store });
    return { relayServerSSR, environment };
};

export default getInitialEnvironment;
