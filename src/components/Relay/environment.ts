import { RelayNetworkLayer, urlMiddleware } from "react-relay-network-modern";
import { Environment, RecordSource, Store } from "relay-runtime";

const network = new RelayNetworkLayer([
    urlMiddleware({
        url: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    }),
]);

export const getEnvironment = (): Environment => {
    const source = new RecordSource();
    const store = new Store(source);

    return new Environment({ network, store });
};
